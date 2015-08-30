define([
    'text!template/shopping-cart.html',
    'controller/shopping-cart-controller'
],function(template,controller){
    var shoppingCartDirective = function(){
        return{
            restrict:'E',
            scope:{},
            template:template,
            controller:['$scope', 'productService',controller],
            link:function(scope,element,attr,ctrl){
                ctrl.getOrders()
            }
        };
    };
    return shoppingCartDirective;
});