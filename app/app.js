'use strict';

// Declare app level module which depends on views, and components
angular.module('AMS', [
    'ui.router',
    // -- app modules
    'AMS.version',
    'AMS.states',
    'AMS.navigation',
    'AMS.new.contract.controller',
    'AMS.new.contract.model',
    'AMS.new.person.controller',
    'AMS.new.org.controller'
])
    .run(['$state', function ($state) {
        $state.go('home');
    }]);
