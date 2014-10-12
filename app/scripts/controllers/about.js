'use strict';

/**
 * @ngdoc function
 * @name amoAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the amoAngularApp
 */
angular.module('amoAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
