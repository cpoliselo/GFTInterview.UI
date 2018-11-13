// <reference path="Module.js">
// <reference path="Service.js">

app.controller('OrderController', function OrderController($scope, $http, baseService) {
    $scope.statusClass = 'label-info';
    $scope.status = 'Loading orders...';

    loadAllOrders();

    function loadAllOrders() {

        var promise = baseService.getAllOrders();

        promise.then(
            function (response) {
                $scope.Orders = response.data;
                $scope.status = 'Loaded. Code: ' + response.status;
                $scope.statusClass = 'label-success';
            },
            function (error) {
                $scope.Orders = null;
                $scope.status = 'Error: ' + error.data;
                $scope.statusClass = 'label-warning';
                $log.error('failure loading Orders', error.data);
            });
    }

    $scope.searchDish = function () {

        if ($scope.SearchKey == "" || $scope.SearchKey == undefined) {
            $scope.statusSearch = 'Error: Please inform the search';
            $scope.statusSearchClass = 'label-warning';
        }
        else {
            var dish = baseService.searchDish($scope.SearchKey);

            dish.then(function (result) {
                var res = result.data;
                $scope.SearchResult = res;
                $scope.statusSearch = "Search Complete";
                $scope.statusSearchClass = 'label-success';
                loadAllOrders();
            }, function (error) {
                $scope.statusSearch = 'Error: ' + error.data;
                $scope.statusSearchClass = 'label-warning';
                console.log("Err" + error);
            },
            );
        }
    }


    //Clear the Scope models
    $scope.refresh = function () {
        $scope.statusClass = 'label-info';
        $scope.status = "";
        $scope.statusSearchClass = 'label-info';
        $scope.statusSearch = "";
        $scope.SearchResult = "";
        $scope.SearchKey = "";
        loadAllOrders();
    }


});