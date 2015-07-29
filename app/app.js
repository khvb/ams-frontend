'use strict';

// Declare app level module which depends on views, and components
angular.module('AMS', [
  'ngRoute',
  'AMS.donor',
  'AMS.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/donor'});
}]);
