'use strict';

angular.module('mddApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/detail/:id', {
        templateUrl : 'views/details.html',
        controller : 'ProjectDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
