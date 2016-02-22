'use strict';

angular.module('darkSideApp.list', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'list/list.html',
            'controller': 'listController'
        })
    }])

    .controller('listController', function($scope, $http, $location) {
        var url = 'http://bk.ships.local/ship/list';

        $http({
            url: url,
            dataType: 'JSONP',
            jsonpCallback: 'callback',
            type: 'GET'
        }).success(function(data, status , header, config){
                $scope.ships = data.list;
        })
        .error(function(data, status , header, config){
            console.log('error');
        });

        $scope.shipDetails = function($id) {
            $location.url('/details/'+$id);
        };

    });