'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('spacedRepApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/review', {
        templateUrl: 'views/review.html',
        controller: 'ReviewController',
        controllerAs: 'reviewController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
