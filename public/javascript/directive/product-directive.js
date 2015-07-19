define([
    'text!template/product.html',
    'javascript/controller/product-controller'
],function(template,controller){
    var productionDirective = function(){
        return{
            restrict:'E',
            scope:{},
            template:template,
            controller:['$scope','productService',controller],
            link:function(scope,element,attr,ctrl){
                ctrl.getProducts();
            }
        };
    };
    return productionDirective;
});