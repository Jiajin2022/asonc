$(document).ready(function(){
    $MarginTop = $(".banner").height();
    console.log($MarginTop);
    $(".brand").css("marginTop",$MarginTop);
    $Imgheight = $('.clearwater img').height();
    console.log($Imgheight);
    $(".clearwater").css("height",$Imgheight);

    $flag = false;
    $(".glyphicon").click(function(){
        if($flag==false){
            // $(".hamburger-list").css("display","block");
            $(".hamburger").slideDown();
            $(".glyphicon").css("color","#4b989f");
            $flag = true;
        }
        else{
            // $(".hamburger-list").css("display","none");
            $(".hamburger").slideUp();
            $(".glyphicon").css("color","#6e6e6e");
            $flag = false;
        }
       
    });
    $(window).scroll(function(){
        var scrolltop = $(window).scrollTop();
        console.log(scrolltop);
        // if(scrolltop!=0){
        //     $(".banner").css("position","fixed");
        // }else{
        //     $(".banner").css("position","static");
        // }
        if(scrolltop>=727){
            $("header").css("background","rgba(255,255,255,1)");
        }else{
            $("header").css("background","rgba(255,255,255,0.3)");
        }
    });
});