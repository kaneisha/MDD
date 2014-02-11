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
        controller: 'ProjectList'
      })
      .when('/detail/:id', {
        templateUrl : 'views/details.html',
        controller : 'ProjectDetail'
      })
      .when('/admin_form', {
        templateUrl : 'views/admin.html',
        controller : 'AdminForm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
