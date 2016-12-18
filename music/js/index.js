function resize(originSize,type){
    var type=type||"x";
    var width=document.documentElement.clientWidth;
    var height=document.documentElement.clientHeight;
    if(type=="x"){
        var scale=width/originSize*100;
    }else if(type=="y"){
        var scale=height/originSize*100;
    }

    document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
}
window.onload=function(){
    resize(750);
}
$(function(){
    $(".main-title span").eq(0).css({"color":"#fff","background":"#DB525A","border-radius":"50px"});
    $(".news").css("display","none");
    $(".news").eq(0).css("display","block");
    $(".main-title span").click(function(){
       var index=$(this).index(".main-title span");
        $(".main-title span").css({"color":"","background":"","border-radius":""});
        $(".main-title span").eq(index).css({"color":"#fff","background":"#DB525A","border-radius":"50px"});
        $(".news").css("display","none");
        $(".news").eq(index).css("display","block");
    })

    $(".menu-list a").eq(0).css({"color":"#fff","background":"#DB525A","border-radius":"40px"});
    $(".menu-list a").click(function(){
        var index=$(this).index(".menu-list a");
        $(".menu-list a").css({"color":"","background":"","border-radius":""});
        $(".menu-list a").eq(index).css({"color":"#fff","background":"#DB525A","border-radius":"40px"});
    })
})