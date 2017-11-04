var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function ($stateProvider) {

    $stateProvider
        //new state added for merchant param
        .state('One', {
            url: '/One',
            templateUrl: 'views/one.html',
            controller: 'oneCtrl'
        })
        .state('Two', {
            url: '/Two',
            templateUrl: 'views/two.html',
            controller: 'twoCtrl'
        })
});