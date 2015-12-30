'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('spacedRepApp')
  .controller('ReviewController', function ($scope, $firebaseObject) {
     var ref = new Firebase("https://amber-torch-6056.firebaseio.com/data");
     var syncObject = $firebaseObject(ref);
     syncObject.$bindTo($scope, "data");
     console.log('tesme', ref);

    $scope.cards = [
      {'front': 'I love you', 'back': 'te amo', 'history': ['easy', 'med', 'easy'], 'reviewTimeInMinutes': 0},
      {'front': 'Can I have the check', 'back': 'puedo tener el cheque', 'history': ['easy', 'med', 'easy'], 'reviewTimeInMinutes': 0},
      {'front': 'Tonight', 'back': 'esta noche', 'history': ['easy', 'med', 'easy'], 'reviewTimeInMinutes': 0},
      {'front': 'can I practice my spanish', 'back': 'puedo practicar mi espanol', 'history': ['easy', 'med', 'easy'], 'reviewTimeInMinutes': 0},
      {'front': 'I love you', 'back': 'te amo', 'history': ['easy', 'med', 'easy'], 'reviewTimeInMinutes': 0},
      {'front': 'Can I have the check', 'back': 'puedo tener el cheque', 'history': ['easy', 'med', 'easy'], 'reviewTimeInMinutes': 0},
      {'front': 'Tonight', 'back': 'esta noche', 'history': ['easy', 'med', 'easy'], 'reviewTimeInMinutes': 0},
      {'front': 'I love you', 'back': 'te amo', 'history': ['easy', 'med', 'easy'], 'reviewTimeInMinutes': 0},
      {'front': 'Can I have the check', 'back': 'puedo tener el cheque', 'history': ['easy', 'med', 'easy'], 'reviewTimeInMinutes': 0},
      {'front': 'Tonight', 'back': 'esta noche', 'history': ['easy', 'med', 'easy'], 'reviewTimeInMinutes': 0}
    ];
    $scope.reviewingCards = [];
    $scope.init = function(){
      $scope.nextCard();
    };
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
    var currentCard = $scope.cards.pop();
    $scope.findOpimalReviewTime = function(card){
      console.log('findOpimalReviewTime');

      $scope.history = card.history;
      $scope.timeEasy = 1440;
      $scope.timeMed = 60;
      $scope.timeHard = 10;

      $scope.wieght1 = .5;
      $scope.wieght2 = .25;
      $scope.wieght3 = .125;
      $scope.wieght4 = .0625;
      $scope.wieght5 = .03125;





    };


    $scope.init();
    $scope.findOpimalReviewTime(currentCard);
  });
