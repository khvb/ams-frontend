'use strict';

// Declare app level module which depends on views, and components
angular.module('AMS', [
  'ui.router',
  // -- app modules
  'AMS.version',
  'AMS.states',
  'AMS.navigation',
])
.run(['$state', function($state){
  $state.go('home');
}]);
