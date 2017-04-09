// iife construct
(function (angular) {
  'use strict';

  //routeprovider
  function AppConfig ($routeProvider){
    $routeProvider
      .when('/home',{
        templateUrl:'../template/home.temp.html',
        controller: 'HomeControler'
      })
      .when('/about',{
        templateUrl:'../template/about.html',
        controller: 'ProjectController'
      })
      .otherwise('/home');

  }
  AppConfig.$inject = ['$routeProvider'];


  //callback function to be excuted once as soon as the app is intialized
  //function ProjectController() {

  //}
  //injecting a dependency
  //AppRun.$injuct = [];

  //to define the app module, we write:
  angular.module('projectApp',
                  ['ngAnimate',
                    'ngAria',
                    'ngCookies',
                    'ngMessages',
                    'ngResource',
                    'ngRoute',
                    'ngSanitize',
                    'ngTouch',
                    'coustemApp',
                    'ProjectAppi'
                    ])


  .config(AppConfig);

    //.run(['$routeScope',function ($routeScope) {
    //}]);

})(window.angular || (window.angular = {}));
