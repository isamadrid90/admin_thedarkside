'use strict';

// Declare app level module which depends on views, and components
/*angular.module('myApp', [
  'ngRoute',
  'myApp.list',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}]);*/

// create the module and name it darkSideApp
var darkSideApp = angular.module('darkSideApp', [
    'ngRoute',
    'darkSideApp.list',
    'darkSideApp.details',
    'darkSideApp.tunning'
]);
// configure our routes
darkSideApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
    $routeProvider

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
}]);

darkSideApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});