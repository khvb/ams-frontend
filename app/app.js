'use strict';

// Declare app level module which depends on views, and components
angular.module('AMS', [
  'eehNavigation',
  'pascalprecht.translate',
  'ui.bootstrap',
  'ui.router',
  'AMS.version'
])
.config(['eehNavigationProvider', function (eehNavigationProvider) {
    // Add nested user links to the "foo" menu.
    eehNavigationProvider
    .menuItem('foo.user', {
        text: 'Me',
        iconClass: 'fa-user'
    })
    .menuItem('foo.user.profile', {
        text: 'User Profile',
        iconClass: 'fa-user',
        href: '/user-profile'
    });

    // Add a menu item that links to "/home" to the "bar" menu.
    eehNavigationProvider
    .menuItem('bar.home', {
        text: 'Home',
        iconClass: 'fa-home',
        href: '/home'
    });
}]);
