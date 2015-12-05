'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('spacedRepApp')
  .controller('ReviewController', function ($scope) {
    $scope.cards = [
      {'front': 'I love you', 'back': 'te amo', 'history': ['easy', 'med', 'easy']},
      {'front': 'Can I have the check', 'back': 'puedo tener el cheque', 'history': []},
      {'front': 'Tonight', 'back': 'esta noche', 'history': []},
      {'front': 'can I practice my spanish', 'back': 'puedo practicar mi espanol', 'history': []}
    ];
    $scope.reviewingCards = [];
    $scope.nextCard = function(){
      $scope.next = $scope.cards.pop();
      $scope.reviewingCards.push($scope.next);
      $scope.updateQueue();
    };
    $scope.answer = false;
    $scope.showAnswer = function(){
      $scope.answer = true;
    };
    $scope.saveDificutly = function(value){
      $scope.next.history.push(value);
      $scope.answer = false;
      $scope.nextCard();
    };
    $scope.updateQueue = function(){
      $scope.queuedCards = $scope.cards.length;
      $scope.reviewing = $scope.reviewingCards.length;
    };



  });
