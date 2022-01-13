$(document).ready(//文档结构已经加载完成后执行（不包含图片等非文字媒体文件）
    function()
    {
        // $('body').off('touchend');//off将删除之前附加到其上的事件处理程序。 但它不会停止元素的默认行为 您可以向单个选择器添加多个事件。
        $('body').on('touchend',function(e) {//click事件在移动端浏览器其实是默认由touchstart、touchend这两个事件的触发 //阻止touchend事件的默认事件就可以的。
            e.preventDefault();
        });

        //对手机端起作用
        $("#id_button_Turn").on("touchstart",function(){
            turn_around();
        });
        $("#id_button_Left").on("touchstart",function(){
            move_pattern(0,-1);
        });
        $("#id_button_Down").on("touchstart",function(){
            // move_pattern(1,0);
            fast_down();
        });
        $("#id_button_Righ").on("touchstart",function(){
            move_pattern(0,1);
        });

        //对PC端起作用
        $("#id_button_Turn").on("click",function(){
            turn_around();
        });
        $("#id_button_Left").on("click",function(){
            move_pattern(0,-1);
        });
        $("#id_button_Down").on("click",function(){
            // move_pattern(1,0);
            fast_down();
        });
        $("#id_button_Righ").on("click",function(){
            move_pattern(0,1);
        });
        
        
    }
)