const protocol= 'http://';
const hostname = "0.0.0.0";
const port = 12345;
const ignoreFiles=["index.js","package.json","package-lock.json"]

var http = require('http');
var fs =require("fs");

var basePath=process.cwd();
var basePath_404=process.cwd()+"/404.html";

var server=http.createServer(
    function (request, response)
    {
        try{
            var filePath=null;

            if(request.url=="/" ||request.url=="/index")
                filePath = basePath + "/index.html";
            else if(isIgnoredFile(request.url))
            {
                filePath = basePath_404;
            }else
            {
                filePath = basePath + request.url;
            }
            fs.readFile(filePath,function(err,data){
                if(err)
                {
                    console.log("文件读取错误:"+err);
                    console.log("用户请求的url为:"+request.url);
                    console.log("发送个用户文件为:"+basePath_404);
                    response.statusCode=404;
                    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
                    response.end(fs.readFileSync(basePath_404));
                }else
                {
                    console.log("文件读取成功");
                    console.log("用户请求的url为:"+request.url);
                    response.statusCode=200;
                    response.end(data);
                }
            });

        }catch(err)
        {
            console.error(err);
        }
        
    }
);
server.listen(port,hostname,()=>{
        console.log('Server running at ' + protocol + hostname + ':' + port + '/')
    }
);


function isIgnoredFile(url)
{
    for(var i=0;i<ignoreFiles.length;i++)
    {
        if(url.indexOf(ignoreFiles[i])!=-1)//indexOf返回下标,-1表示没找到
            return true;
        else
            continue;
    }
    return false;
}