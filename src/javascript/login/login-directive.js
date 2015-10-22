define([
    'text!login/login.html',
    'login/login-controller'
],function(template,controller){
    var loginDirective = function(){
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
    return loginDirective;
});