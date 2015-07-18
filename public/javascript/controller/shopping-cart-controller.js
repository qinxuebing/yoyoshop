define([], function () {
    return function (scope, service) {
        this.scope = scope;
        this.service = service;

        this.scope.gridOptions = {
            enableSorting: true,
            columnDefs: [
                {field: 'firstName'},
                {field: 'lastName'},
                {field: 'company'},
                {field: 'employed'}
            ],
            onRegisterApi: function (gridApi) {
                scope.grid1Api = gridApi;
            }
        };


        this.getOrders = function () {
            var self = this;
            return this.service.getOrders().then(function (data) {
                self.scope.gridOptions.data = data;
                self.scope.$apply();
            });
        };


    }
});