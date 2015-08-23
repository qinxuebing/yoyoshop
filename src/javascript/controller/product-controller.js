define([
    'q',
], function (q) {
    'use strict';

    return function (scope, productService, localstorageService) {
        this.scope = scope;
        this.scope.product = [];
        this.productService = productService;
        this.localstorageService = localstorageService;
        this._products = [];
        this.isInitialed = false;

        this.getAllProduct = function () {
            var self = this;
            return this.productService.getProducts().then(function (data) {
                self._products = data.data;
                self.isInitialed = true;
                return self._products;
            });
        };

        this.getProductByPage = function (pageIndex, pageNumber) {
            var self = this;
            return this._getProductsFromRemoteServer().then(function (products) {
                return products.slice(pageIndex * pageNumber, (pageIndex + 1) * pageNumber);
            }).then(function(products){
                products.forEach(function(product){
                    var img = self._getProductsFromLocalStorage(product.id);
                    if(img&&img.length>0){
                        product.path=img;
                    }
                });
                self.scope.products = products;
            });
        };

        this.back=function(){
          this.scope.products.forEach(function(item){
               var img = $('img[id="'+item._id+'"]');
              this.saveImg(item._id,img[0])
          }.bind(this));
        };

        this.next=function(){
            console.log('next ..............');
        };

        this.saveImg = function(id,element){
            this.localstorageService.setImg(id,element);
        };

        this._getProductsFromRemoteServer = function () {
            if (this.isInitialed) {
                return q.when(this._products);
            } else {
                return this.getAllProduct();
            }
        };

        this._getProductsFromLocalStorage = function (id) {
            return this.localstorageService.getImg(id);
        };
    };
});