//iife construct

(function (angular) {
  'use strict';
  //call back functin
  function HomeController ($scope,$location) {
    $scope.user = {
      'username': '',
      'password': ''
    };

    $scope.loginUser = function () {
      if($scope.user.username === 'krishna' &&  $scope.user.password === 'krishna'){
        console.log('Login was successful');
        $location.path('/about');
      }
    };
  }
  //inject the dependencies
  HomeController.$inject = ['$scope','$location'];

//creating module and define controller

  angular.module('coustemApp',[]).controller('HomeControler',HomeController);

})(window.angular || (window.angular = {}));
