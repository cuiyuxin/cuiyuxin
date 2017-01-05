var express=require("express");
var router=express.Router();

router.use("/ajax",function(req,res){
    var data=[
        {name:"张三",phone:"13434545623",en:"z"},
        {name:"李四",phone:"13434545623",en:"l"},
        {name:"随便",phone:"13434545623",en:"s"},
        {name:"符合",phone:"13434545623",en:"f"},
        {name:"是时",phone:"13434545623",en:"s"},
        {name:"大张三",phone:"13434545623",en:"d"},
        {name:"随便",phone:"13434545623",en:"s"},
        {name:"符合",phone:"13434545623",en:"f"},
        {name:"是时",phone:"13434545623",en:"s"},
        {name:"大张三",phone:"13434545623",en:"d"},
        {name:"随便",phone:"13434545623",en:"s"},
        {name:"符合",phone:"13434545623",en:"f"},
        {name:"是时",phone:"13434545623",en:"s"},
        {name:"大张三",phone:"13434545623",en:"d"}
    ];
    res.send(JSON.stringify(data));
})

module.exports=router;