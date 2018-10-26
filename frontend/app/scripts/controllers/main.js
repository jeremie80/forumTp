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
  

  $http.get('http://localhost:3000/api/Articles').then(function(response) {
      $scope.articles = response.data;
      console.log($scope.articles);
  });

  $scope.addArticle = function(dataArticle){
    dataArticle.accountId = "5bd2d498fb09181fe466c3cd";
    $http.post('http://localhost:3000/api/Articles',dataArticle).then(function(response) {
        
        console.log(response);
    });
  };
  $scope.getComment = function(titlearticle, articleid){
    $scope.titlearticlecomment = titlearticle;
    $scope.articleidcomment = articleid;
    $scope.comments = [];
    $http.get('http://localhost:3000/api/Articles/'+ $scope.articleidcomment+'/comment').then(function(response) {
        
        $scope.comments = response.data;

        console.log($scope.comments);
    });
  
  };
  $scope.addComment = function(idArticle, dataComment){
    dataComment.accountId = "5bd2d498fb09181fe466c3cd";
    dataComment.articleId = idArticle;

    $http.post('http://localhost:3000/api/Comments',dataComment).then(function(response) {
        
        console.log(response);
    });
  };
 





    
  });
