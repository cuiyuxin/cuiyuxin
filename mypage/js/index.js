$(function(){
    $(".s-title").click(function(){
        $(".s-con").slideToggle(200);
    })

    $(".nav li").click(function(){
        $(".nav li").css("background","rgba(255,255,255,.4)");
        $(".nav li a").css("color","#000");
        $(this).css("background","rgba(255,255,255,.6)");
        $(".screen li").css("display","none");
        var index=$(this).index(".nav li");
        $(".screen li").eq(index).fadeIn();
        $(".nav li a").eq(index).css("color","#5394D6")
    })

    $(".small-nav li").click(function(){
        $(".screen li").css("display","none");
        var index=$(this).index(".small-nav li");
        $(".screen li").eq(index).fadeIn();
    })
})