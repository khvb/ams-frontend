'use strict';

angular.module('AMS.states', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state("home", {
                url: '/',
                template: '<p>Home, sweet homepage!</p>'
            });

            $stateProvider.state("organisation", {
                url: '/organisation',
                template: '<p>Organisation mockup form</p>'
            });

            $stateProvider.state("person", {
                url: '/person',
                template: '<p>Person mockup form</p>'
            });

            $stateProvider.state("contract", {
                url: '/contract',
                templateUrl: "./ui-states/contract/create/view.html"
            });
        }]);