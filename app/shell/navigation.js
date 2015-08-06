'use strict';

angular.module('AMS.navigation', [
  'eehNavigation',
  'pascalprecht.translate',
  'ui.bootstrap',
  'ui.router',
])
.config(['eehNavigationProvider', function (eehNavigationProvider) {
    // Add nested user links to the "foo" menu.
    /*eehNavigationProvider
    .menuItem('foo.user', {
        text: 'Me',
        iconClass: 'fa-user'
    })
    .menuItem('foo.user.profile', {
        text: 'User Profile',
        iconClass: 'fa-user',
        href: '/user-profile'
    });*/

    eehNavigationProvider
    .menuItem('navbar.home', {
        text: 'Home',
        iconClass: 'fa-home',
        state: 'home'
    }).menuItem('navbar.mockups', {
        text: 'Mockups'
    }).menuItem('navbar.mockups.person', {
        text: 'Person',
        state: 'person'
    }).menuItem('navbar.mockups.contract', {
        text: 'Contract',
        state: 'contract'
    }).menuItem('navbar.mockups.organisation', {
        text: 'Organisation',
        state: 'organisation'
    });
}]);