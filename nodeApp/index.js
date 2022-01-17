const protocol= 'http://';
const hostname = "0.0.0.0";
const port = 12345;
const ignoreFiles=["index.js","package.json","package-lock.json"]

var http = require('http');
var fs =require("fs");
const { log } = require('console');

var basePath=process.cwd();
var basePath_404=process.cwd()+"/404.html";
var errLogFilePath=process.cwd() + "/log";
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
            fs.readFile(filePath,function(filePath_err,data){//读取所请求的页面
                if(filePath_err)//所请求的页面读取出错
                {
                    console.log("文件读取错误:"+filePath_err);
                    console.log("用户请求的url为:"+request.url);
                    response.statusCode=404;
                    fs.readFile(basePath_404,function(basePath_404_err,data){////读取404的页面
                        if(basePath_404_err)//404页面读取出错
                        {
                            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
                            response.end(basePath_404_err);
                        }else
                        {
                            response.setHeader('Content-Type', 'text/html; charset=utf-8');
                            // response.end(data+filePath_err);
                            response.end(data);
                        }
                    });
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
process.on('uncaughtException', err => {//捕捉未处理的报错
    console.log('uncaughtException err:')
    console.error(err && err.stack)
    fs.writeFile(errLogFilePath,err,function(err){
        if(err)
            console.log("记录出错日志失败");
        else
            console.log("记录出错日志成功");

    });
  });
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