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
                scope.activeTab = 0;
                scope.ctrl = ctrl;
                scope.switchTab = function(event){
                   scope.activeTab =parseInt($(event.target).attr('tab-index'),10);
                }
            }
        };
    };
    return loginDirective;
});