'use strict';

angular.module('darkSideApp.details', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/details/:shipId', {
            templateUrl : 'details/details.html',
            controller: 'detailsController'
        })
    }])
    .controller('detailsController', function($http, $scope, $routeParams, $location) {
        var id = $routeParams.shipId;

        var url = 'http://bk.ships.local/ship/'+ id;
            $http({
                url: url,
                dataType: 'JSONP',
                jsonpCallback: 'callback',
                type: 'GET'
            }).success(function(data, status , header, config){
                    $scope.shipData = data;
                     if (!$scope.$$phase) {
                     $scope.$apply();
                     }
            })
            .error(function(data, status , header, config){
                console.log('error');
            });
        $scope.selectShip = function($id) {
            $location.url('/tunning/'+$id);
        };
    });
