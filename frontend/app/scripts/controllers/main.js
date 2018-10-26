'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
  $scope.getArticles = function(){
    $http.get('http://localhost:3000/api/Articles').then(function(response) {
       return $scope.articles = response.data;
      console.log($scope.articles);
  });
  };


    
  });
