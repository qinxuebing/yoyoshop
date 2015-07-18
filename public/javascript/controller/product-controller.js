define([

],function(){
    return function(scope,service){
        this.scope = scope;
        this.scope.product=[];
        this.service = service;
        this.getProducts = function(){
            return this.service.getProducts().then(function(data){
                console.log('get products',data);
                this.scope.products = data;
                this.scope.$apply();
            });
        };

    }
});