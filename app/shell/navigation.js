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
    .menuItem('bar.home', {
        text: 'Home',
        iconClass: 'fa-home',
        state: 'home'
    });
}]);