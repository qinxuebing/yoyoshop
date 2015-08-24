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

        this.getProductByPage = function () {

            var pageIndex = this.scope.pageIndex;
            var pageNumber = this.scope.pageNumber;

            var self = this;
            return this._getProductsFromRemoteServer().then(function (products) {
                return products.slice(pageIndex * pageNumber, (pageIndex + 1) * pageNumber);
            }).then(function (products) {
                products.forEach(function (product) {
                    var img = self._getProductsFromLocalStorage(product._id);
                    console.log(product._id,'get img from localstorage:',img);
                    if (img && img.length > 0) {
                        product.img = 'data:image/jpeg;base64,'+img;
                        product.isLocalStorage = true;
                    }
                });
                console.log('get product img:',products);
                self.scope.products = products;
                self.scope.$apply();
            });
        };

        this.back = function () {
            console.log('go to back...................');
            this.saveImgs();

            if (this.scope.pageIndex > 0) {
                this.scope.pageIndex = this.scope.pageIndex - 1;
                this.getProductByPage();
            }

        };

        this.next = function () {
            console.log('go to next...................');
            this.saveImgs();

            var endNumber = (this.scope.pageIndex + 1) * this.scope.pageNumber;
            var productNumber = this._products.length;
            console.log('endNumber',endNumber,'productNumber',productNumber);
            if (productNumber < endNumber || productNumber === endNumber) {
                return;
            } else {
                this.scope.pageIndex = this.scope.pageIndex + 1;
                this.getProductByPage();
            }

        };

        this.saveImgs = function () {
            this.scope.products.forEach(function (item) {
                if(item.isLocalStorage){
                    return;
                }
                var img = $('img[id="' + item._id + '"]');
                this.saveImg(item._id, img[0])
            }.bind(this));
        };

        this.saveImg = function (id, element) {
            this.localstorageService.setImg(id, element);
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