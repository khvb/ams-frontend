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
                templateUrl: "./ui-states/org/create/viewOrg.html"
            });

            $stateProvider.state("person", {
                url: '/person',
                templateUrl: "./ui-states/person/create/viewPerson.html"
            });

            $stateProvider.state("contract", {
                url: '/contract',
                templateUrl: "./ui-states/contract/create/view.html"
            });
        }]);