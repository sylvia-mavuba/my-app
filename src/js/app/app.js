//require('./app/appModule.js');
//https://scotch.io/tutorials/animating-angularjs-apps-ngview

//ici je déclenche la compilation du fichier css
require('../../scss/main.scss');


var angular = require('angular');
var home = require('./home/home.js');

(function () {
    'use strict';

    var blogApp = angular.module('blogApp', ['ui.router']);

    blogApp.config( function ($stateProvider, $urlRouterProvider) {

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
    blogApp.controller('homeCtrl', home);

    blogApp.controller('aboutCtrl', function ($scope) {
        debugger
        console.log('je suis dans about');
    })


}());
