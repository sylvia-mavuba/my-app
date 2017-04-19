//require('./app/appModule.js');
//https://scotch.io/tutorials/animating-angularjs-apps-ngview

//ici je déclenche la compilation du fichier css
require('../../scss/main.scss');


var angular          = require('angular');
var home             = require('./home/homeCtrl.js');
var articles         = require('./articles/articleCtrl.js');
var articlesService  = require('./articles/articleService.js');
//var loadRestaurants  = require('./home/getRestaurants').getRestaurant;

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

                .state('articles', {
                    url: '/articles',
                    templateUrl: 'articles.html',
                    controller: 'articlesCtrl'
                })

            }
        );

    // CONTROLLERS ============================================
    blogApp.controller('homeCtrl', home);

    blogApp.controller('articlesCtrl', articles);



    // SERVICES ============================================
    blogApp.service('articleService', articlesService);


}());
