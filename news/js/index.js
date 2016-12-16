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
    $("nav a").eq(0).css("color","red");
    $("nav a").click(function(){
        $("nav a").css("color","");
        var index=$(this).index("nav a");
        $("nav a").eq(index).css("color","red");
    })
    $("nav a").eq(6).click(function(){
        $(".con").css("display","block");
        $(".swiper-container").css("display","none");
        $(".main").css("display","none");
        $("footer").css("display","none");
    })
    $(".con-foot span").click(function(){
        $('.con').css("display","none");
        $(".swiper-container").css("display","block");
        $(".main").css("display","block");
        $("footer").css("display","block");
    })


    $(".text").eq(0).css("color","red");
    $(".icon").eq(0).css("color","red");
    $(".news").css("display","none");
    $(".news").eq(0).css("display","block");
    $(".title").click(function(){
        $(".text").css("color","");
        $(".icon").css("color","");
        $(".news").css("display","none");
        var index=$(this).index(".title");
        $(".text").eq(index).css("color","red");
        $(".icon").eq(index).css("color","red");
        $(".news").eq(index).css("display","block");
    })
    //发现
    $(".f-left").eq(0).css({"color":"red","border-bottom":"2px solid red"});
    $(".find").css("display","none");
    $(".find").eq(0).css("display","block");
    $(".f-left").click(function(){
        var index=$(this).index(".f-left");
        $(".f-left").css({"color":"","border-bottom":""});
        $(".f-left").eq(index).css({"color":"red","border-bottom":"2px solid red"});
        $(".find").css("display","none");
        $(".find").eq(index).css("display","block");
    })

    //分享
    $(".fx").click(function(){
        $(".fx-main").css("display","block");
    })
    $(".fx-bottom").click(function(){
        $(".fx-main").css("display","none");
    })
})