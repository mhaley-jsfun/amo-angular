'use strict';

/**
 * @ngdoc function
 * @name amoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the amoAngularApp
 */
angular.module('amoAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
