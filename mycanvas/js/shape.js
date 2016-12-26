function shape(canvas,cobj){
    this.canvas=canvas;
    this.cobj=cobj;
    this.width=this.canvas.width;
    this.height=this.canvas.height;
    this.type="line";//图形种类
    this.style="stroke";//填充 方式
    this.strokeStyle="#000";
    this.fillStyle="#000";
    this.lineWidth=1;
    this.history=[];
    this.bianNum=5;
    this.jiaoNum=5;

}
shape.prototype={
    init:function(){
        this.cobj.style=this.style;
        this.cobj.strokeStyle=this.strokeStyle;
        this.cobj.fillStyle=this.fillStyle;
        this.cobj.lineWidth=this.lineWidth;
    },
    draw:function(){
        var that=this;
        this.canvas.onmousedown=function(e){
            var startx= e.offsetX;
            var starty= e.offsetY;
            that.canvas.onmousemove=function(e){
                that.init();
                var movex= e.offsetX;
                var movey= e.offsetY;

                that.cobj.beginPath();
                that.cobj.clearRect(0,0,that.width,that.height);

                if(that.history.length>0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0);
                }

                that[that.type](startx,starty,movex,movey);
                // that.line.type(smarty,smarty,movex,moveyy);

            }
            that.canvas.onmouseup=function(){
                that.canvas.onmousemove=null;
                that.canvas.onmouseup=null;
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
            }
        }
    },
/*    line:function(x,y,x1,y1){
        this.cobj.beiginPath();
        this.cobj.moveTo(x,y);
        this.cobj.lineTo(x1,y1);
        this.cobj.stroke();
    },
    rect:function(x,y,x1,y1){
        this.cobj.beginPath();
        this.cobj.rect(x,y,x1-x,y1-y);
        this.cobj[this.style]();
    },
    arc:function(x,y,x1,y1){
        this.cobj.beginPath();
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        this.cobj.arc(x,y,r,0,2*Math.PI);
        this.cobj[this.style]();
    },
    bian:function(x,y,x1,y1){//多边形
        this.cobj.beginPath();
        var angle=360/this.bianNum *Math.PI/180;
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        for(var i=0;i<this.bianNum;i++){
            this.cobj.lineTo(Math.cos(angle*i)*r+x,Math.sin(angle*i)*r+y);
        }
        this.cobj.closePath();
        this.cobj[this.style]();
    },
    jiao:function(x,y,x1,y1){
        this.cobj.beginPath();
        var angle=360/(this.jiaoNum*2)*Math.PI/180;
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        for(var i=0;i<this.jiaoNum*2;i++){
            if(i%2==0){
                this.cobj.lineTo(Math.cos(angle*i)*r+x,Math.sin(angle*i)*r+y);
            }else{
                var r1=r/2;
                this.cobj.lineTo(Math.cos(angle*i)*r1+x,Math.sin(angle*i)*r1+y);
            }
        }
        this.cobj.closePath();
        this.cobj[this.style]();
    },*/
    pen:function(){
        var that=this;
        this.canvas.onmousedown=function(e){

            var startx= e.offsetX;
            var starty= e.offsetY;
            that.cobj.beginPath();
            that.cobj.moveTo(startx,starty);
            //鼠标移动
            that.canvas.onmousemove=function(e){
                that.init();
                var movex= e.offsetX;
                var movey= e.offsetY;

                that.cobj.clearRect(0,0,that.width,that.height);

                if(that.history.length>0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0);
                }

                that.cobj.lineTo(movex,movey);
                that.cobj.stroke();


            }
            that.canvas.onmouseup=function(){
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
                that.canvas.onmousemove=null;
                that.canvas.onmouseup=null;
            }
        }
    }




}
