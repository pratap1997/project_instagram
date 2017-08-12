var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'components/home/index.html',
            controller: 'homeCtrl'
        })
})