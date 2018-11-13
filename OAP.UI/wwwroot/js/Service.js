// <reference path="Module.js">

app.service('baseService', function ($http) {

    var baseUrl = 'https://localhost:44361';

    this.searchDish = function (searchKey) {
        return $http.get(baseUrl + "/api/dishorder/" + searchKey);
    }

    //Get All Books
    this.getAllOrders = function () {
        return $http.get(baseUrl + "/api/searchlog");
    }

});