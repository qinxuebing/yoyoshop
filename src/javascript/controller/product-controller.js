define([

],function(){
    return function(scope,service){
        this.scope = scope;
        this.scope.product=[];
        this.service = service;
        this.getProducts = function(){
            var self = this;
            return this.service.getProducts().then(function(data){
                self.scope.products = data.data;
            });
        };

    };
});