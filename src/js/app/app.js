//require('./app/appModule.js');
//https://scotch.io/tutorials/animating-angularjs-apps-ngview

//ici je déclenche la compilation du fichier css
require('../../scss/main.scss');


var angular          = require('angular');
var home             = require('./home/homeCtrl.js');
var loadRestaurants  = require('./home/getRestaurants').getRestaurant;

(function () {
    'use strict';

    var blogApp = angular.module('blogApp', ['ui.router']);

    blogApp
        .config( function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            // STATES ===============================================
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'home.html',
                    controller: 'homeCtrl'
                })

                .state('about', {
                    url: '/about',
                    templateUrl: 'about.html',
                    controller: 'aboutCtrl'
                })
            }
        );

    // CONTROLLERS ============================================
    .controller('homeCtrl', home);

    .controller('RestoCtrl', resto);

    .controller('aboutCtrl', function ($scope) {
        console.log('je suis dans about');
    })

    // SERVICES ============================================
    .service('utilsService', function () {

        loadRestaurants: function (data) {
            debugger
        }
    });


}());
