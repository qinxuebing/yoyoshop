define([
    'text!home-page/home-page.html',
    'home-page/home-page-controller'
],function(template,controller){
    var homePageDirective = function(){
        return{
            restrict:'E',
            replace:true,
            scope:{},
            template:template,
            controller:['$scope', controller],
            link:function(scope,element,attr,ctrl){

            }
        };
    };
    return homePageDirective;
});