define([
    'text!yoyoshop/yoyoshop.html',
    'yoyoshop/yoyoshop-controller'
],function(template,controller){
    var yoyoshopDirective = function(){
        return{
            restrict:'E',
            scope:{},
            template:template,
            controller:['$scope','$location','$route', controller],
            link:function(scope,element,attr,ctrl){
               scope.ctrl = ctrl;
            }
        };
    };
    return yoyoshopDirective;
});