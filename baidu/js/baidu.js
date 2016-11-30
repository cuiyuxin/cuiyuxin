$(function(){
    $(window).mousedown(function(e){
        e.preventDefault();
    })
    $(window).mousemove(function(e){
        e.preventDefault();
    })
    var clientH=$(window).height();
    var num=0;
    var flag=true;
    touch.on("body","swipeup","#fullpage",function(){
        if(!flag){
            return;
        }

        num++;
        if(num==$("section").length){
            num=$("section").length-1;
        }

        flag=false;

        $("#fullpage").css({
            marginTop:-num*clientH,
            transition:"margin-top 1s ease"
        });

    })
    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }

        num--;
        if(num==-1){
            num=0;
            return;
        }

        flag=false;

        $("#fullpage").css({
            marginTop:-num*clientH,
            transition:"margin-top 1s ease"
        });

    })

    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;

            $(".aa").each(function(index,obj){
                if(index==0){
                    return;
                }
                if(index==num){
                    $(obj).find(".left-img img").css({
                        marginLeft:0,
                        opacity:1
                    })
                    $(obj).find(".right-img img").css({
                        marginRight:0,
                        opacity:1
                    })
                }else{
                    $(obj).find(".left-img img").css({
                        marginLeft:-50,
                        opacity:0
                    })
                    $(obj).find(".right-img img").css({
                        marginRight:-50,
                        opacity:0
                    })
                }
            })
    })
    $("#fullpage")[0].addEventListener("mozTransitionEnd",function(){
        flag=true;
    })

    $("li span").eq(0).css("background","#30628A");
    $("li span").mouseover(function(){
        var index=$("li span").index(this);
        $(".you").eq(index).css("opacity","1");
    }).mouseout(function(){
        var index=$("li span").index(this);
        $(".you").eq(index).css("opacity","0");
    })

    //对于菜单的操作
    var flag2=true;
    $(".menu-option").click(function(){
        if(flag2){
            //按钮
            $(this).find(".menu-option-tline").css({
                transform:"translate(0,6px) rotate(45deg)"
            })
            $(this).find(".menu-option-bline").css({
                transform:"translate(0,-6px) rotate(-45deg)"
            })
            //菜单变化
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:0,
                    transform:"rotateX(90deg)",
                    animation:"menu .3s ease forwards"+0.2*index+"s"
                })
            })
            flag2=false;
        }else{
            $(this).find(".menu-option-tline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(this).find(".menu-option-bline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            //菜单变化
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:1,
                    transform:"rotateX(0deg)",
                    animation:"menu1 .3s ease forwards"+(1.2-0.2*index)+"s"
                })
            })
            flag2=true;
        }
    })

    $(window).resize(function(){
        clientH=$(window).height();
        var clientW=$(window).width();
        $("#fullpage").css("marginTop",clientH*-num);
        if(clientW>1000){
            $("menu a").css({
                animation:"none",
                opacity:0,
                transform:"rotate(90deg)"
            })

            $(".menu-option-tline,.menu-option-bline").css({
                transform:"translate(0,0) rotate(0)"
            })

            flag2=true;
        }
    })
})