// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state('main',{
                url:'/main',
                templateUrl:'partials/main.html'
            })
            .state('EnterNumber',{
                url:'/EnterNumber',
                templateUrl:'partials/EnterNumber.html'
            })
            .state('tabs',{
                url:'/tabs',
                templateUrl:'partials/tabs.html'
            })
            .state('countDown',{
                url:'/countDown',
                templateUrl:'partials/CounDownt.html'
            });


        $urlRouterProvider.otherwise('/tabs');

    })
    .controller('HomeTabCtrl', function($scope) {
        console.log('HomeTabCtrl');
    });
