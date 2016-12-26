$(function(){
    $(".small-nav").click(function(){
        $(".s-con").slideToggle(200);
    })
    $(".screen li").css("display","none");
    $(".screen li").eq(0).css("display","block");

    $(".nav li").click(function(){
        $(".nav li").css("background","rgba(255,255,255,.4)");
        $(".nav li a").css("color","#000");
        $(this).css("background","rgba(255,255,255,.6)");
        $(".screen li").fadeOut();
        var index=$(this).index(".nav li");
        $(".screen li").eq(index).fadeIn();
        $(".nav li a").eq(index).css("color","#5394D6")
    })


    $(".s-con li").click(function(){
        $(".screen li").fadeOut();
        var index=$(this).index(".s-con li");
        $(".screen li").eq(index).fadeIn();
    })
})