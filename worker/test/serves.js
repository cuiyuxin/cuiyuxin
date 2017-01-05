angular.module("serves",[])
.factory("indexDate",function($http){
  return  $http({url:"1.txt"})//promise对象
})