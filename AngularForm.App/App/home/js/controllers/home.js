﻿angular.module('AngularFormApp')
    .controller('HomeController', function ($scope) {

        $scope.errorMessage = "";
        $scope.data = {};
        $scope.loading = false;

        console.log('home initialized...');

    });