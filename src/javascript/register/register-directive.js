define([
    'text!register/register.html',
    'register/register-controller'
],function(template,controller){
    var registerDirective = function(){
        return{
            restrict:'E',
            scope:{},
            template:template,
            controller:['$scope', controller],
            link:function(scope,element,attr,ctrl){

            }
        };
    };
    return registerDirective;
});