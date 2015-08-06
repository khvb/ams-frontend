'use strict';

angular.module('AMS.states', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $stateProvider.state("home", {
      url: '/',
      template: '<p>Home, sweet homepage!</p>'
    });
}]);