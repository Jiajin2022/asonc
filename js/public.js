$(document).ready(function () {
    $flag = false;
    $(".glyphicon").click(function () {
        if ($flag == false) {
            // $(".hamburger-list").css("display","block");
            $(".hamburger").slideDown();
            $(".glyphicon").css("color", "#4b989f");
            $flag = true;
        }
        else {
            // $(".hamburger-list").css("display","none");
            $(".hamburger").slideUp();
            $(".glyphicon").css("color", "#6e6e6e");
            $flag = false;
        }

    });

    hoverimg(0,"wechatLogo");
    hoverimg(1,"xinlang");
    hoverimg(2,"qq");
    hoverimg(3,"share");


    function hoverimg(i, photo) {
        $(".part2 .left-nav a").eq(i).mouseover(function () {
            var str1 = "images/"+photo+"light.png";
            var str2 = "images/"+photo+".png";
            $(".part2 .left-nav a img").eq(i).attr("src",str1 );
            $(".part2 .left-nav a").eq(i).css("border", "1px solid #4b989f");
            $(".part2 .left-nav a").eq(i).mouseout(function () {
                $(".part2 .left-nav a img").eq(i).attr("src", str2);
                $(".part2 .left-nav a").eq(i).css("border", "1px solid #a0a0a0");
            });
        });
    }
});