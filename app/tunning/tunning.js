'use strict';

angular.module('darkSideApp.tunning', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tunning/:shipId', {
            templateUrl : 'tunning/tunning.html',
            controller: 'tunningController'
        })
    }])
    .controller('tunningController', function($http, $scope, $routeParams, $sce, $compile) {
        var id = $routeParams.shipId;

        var urlBook = 'http://bk.ships.local/ship/book/'+ id;
        $http({
            url: urlBook,
            dataType: 'JSONP',
            jsonpCallback: 'callback',
            type: 'GET'
        }).success(function(data, status , header, config){
                var form= $compile(data.content)($scope);
                angular.element(document.getElementById('book_section')).append(form);

                 if (!$scope.$$phase) {
                 $scope.$apply();
                 }
        })
        .error(function(data, status , header, config){
            console.log('error');
        });
        $scope.submit_book_ship = function(event) {
            event.preventDefault();
            console.log($scope.book_ship);
            $http.post(urlBook, $scope.book_ship, {headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                }})
                .success(function (data, status, header, config) {
                    $scope.bookContent = $sce.trustAsHtml(data.content);
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                })
                .error(function (data, status, header, config) {
                    console.log('error');
                });
        };


        var urlBuild = 'http://bk.ships.local/ship/build/'+ id;
        $http({
            url: urlBuild,
            dataType: 'JSONP',
            jsonpCallback: 'callback',
            type: 'GET'
        }).success(function(data, status , header, config){
                $scope.buildForm = $sce.trustAsHtml(data.content);
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            })
            .error(function(data, status , header, config){
                console.log('error');
            });
    });
