//iife construct

(function (angular) {
'use strict';
 // we should write inside paranthasis '$rootScope'
  function ProjectControll($scope){
    /*$scope.firstName = 'Krishna Kanth';  setting the data
    $scope.lastName = 'Kondoju'; */

    //another method to create one way data binding
    $scope.user = {
      firstName: 'krishna kanth',
      lastName: 'kondoju'

    }; //$rootScope.user


  }

  ProjectControll.$inject = ['$scope']; //'$rootScope' we can injuct to use in totoal html



  //call the module from app.js file
  angular.module('ProjectAppi',[]).controller('ProjectController',ProjectControll);
})(window.angular || (window.angular = {}));
