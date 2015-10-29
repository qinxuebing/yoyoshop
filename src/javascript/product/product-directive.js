define([
    'text!product/product.html',
    'product/product-controller'
],function(template,controller){
    'use strict';

    var productionDirective = function(){
        return{
            restrict:'E',
            scope:{},
            template:template,
            controller:['$scope','productService','localstorageService',controller],
            controllerAs:'productCtl',
            link:function(scope,element,attr,ctrl){

                scope.pageIndex =0;
                scope.pageNumber =5;

                ctrl.getProductByPage();

            }
        };
    };
    return productionDirective;
});