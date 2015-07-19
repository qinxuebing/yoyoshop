define([
    'text!template/yoyoshop.html',
    'javascript/controller/yoyoshop-controller'
],function(template,controller){
    var yoyoshopDirective = function(){
        return{
            restrict:'E',
            scope:{},
            template:template,
            controller:['$scope', controller],
            link:function(scope,element,attr,ctrl){
               scope.ctrl = ctrl;
            }
        };
    };
    return yoyoshopDirective;
});