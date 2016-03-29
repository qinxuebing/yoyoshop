define(function(){
    return function(routeProvider){
        routeProvider
            .when('/login', {
                templateUrl: '/login/login-index.html'
            })
            .when('/product', {
                templateUrl: '/product/product-index.html'
            })
            .when('/shoppingCart', {
                templateUrl: '/shopping-cart/shopping-cart-index.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    };
});