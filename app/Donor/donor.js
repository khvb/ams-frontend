'use strict';

angular.module('AMS.donor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/donor', {
    templateUrl: 'Donor/donor.html',
    controller: 'DonorCtrl'
  });
}])

.controller('DonorCtrl', [function() {

}]);