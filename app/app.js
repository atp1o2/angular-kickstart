'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.home',
  'myApp.about'
]).

config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // $urlRouterProvider.otherwise("/view1");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: 'app/templates/views/home.html',
      controller: 'homeCtrl'
    })

    .state('about', {
      url: "/about",
      templateUrl: 'app/templates/views/about.html',
      controller: 'aboutCtrl'
    })

}]);
