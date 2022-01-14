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
        $("#id_button_Down").on("touchstart",function(){
            // move_pattern(1,0);
            // directly_down();
            fast_down();
        });
        $("#id_button_Left").on("touchstart",function(){
            // move_pattern(0,-1);
            fast_left();
        });
        $("#id_button_Righ").on("touchstart",function(){
            // move_pattern(0,1);
            fast_right();
        });
        //stop_fast_
        $("#id_button_Turn").on("touchend",function(){
            // turn_around();
        });
        $("#id_button_Down").on("touchend",function(){
            stop_fast_down();
        });
        $("#id_button_Left").on("touchend",function(){
            // move_pattern(0,-1);
            stop_fast_left();
        });
        $("#id_button_Righ").on("touchend",function(){
            // move_pattern(0,1);
            stop_fast_right();
        });
    //对PC端起作用
        $("#id_button_Turn").on("mousedown",function(){
            turn_around();
        });
        $("#id_button_Down").on("mousedown",function(){
            // move_pattern(1,0);
            fast_down();
        });
        $("#id_button_Left").on("mousedown",function(){
            // move_pattern(0,-1);
            fast_left();
        });
        $("#id_button_Righ").on("mousedown",function(){
            // move_pattern(0,1);
            fast_right();
        });
        //stop_fast_
        $("#id_button_Turn").on("mouseup",function(){
            // turn_around();
        });
        $("#id_button_Down").on("mouseup",function(){
            // move_pattern(1,0);
            // fast_down();
            stop_fast_down();
        });
        $("#id_button_Left").on("mouseup",function(){
            // move_pattern(0,-1);
            stop_fast_left();
        });
        $("#id_button_Righ").on("mouseup",function(){
            // move_pattern(0,1);
            stop_fast_right();
        });
        
        
    }
)