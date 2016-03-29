define([
    'text!top-menu/top-menu.html',
    'top-menu/top-menu-controller'
],function(template,controller){
    var topMenuDirective = function(){
        return{
            restrict:'E',
            replace:true,
            scope:{
                header:"="
            },
            template:template,
            controller:['$scope','topMenuService', controller],
            link:function(scope,element,attr,ctrl){
                scope.ctrl = ctrl;
            }
        };
    };
    return topMenuDirective;
});