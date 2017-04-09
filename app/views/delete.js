//route provider in app.js

function AppConfig ($routeProvider){
  $routeProvider
    .when('/home',{
      templateUrl:'../template/home.temp.html',
      controller: 'HomeControler'
    })
    .otherwise('/home');

}

AppConfig.$inject = ['$routeProvider'];


.config(AppConfig);

//route provider

function AppConfig($routeProvider) {
  $routeProvider
    .when('/home',{
      templateUrl: '..',
      controller:''
    })
    .when('',{
      templateUrl:'../',
      controller:' '

    })
    .otherwise('/');

}
AppConfig.$inject = ['$routeProvider'];

.config(AppConfig);
//creating controller


