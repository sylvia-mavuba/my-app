//require('./app/appModule.js');
//https://scotch.io/tutorials/animating-angularjs-apps-ngview

//ici je déclenche la compilation du fichier css
require('../../scss/main.scss');


var angular          = require('angular');
var home             = require('./home/homeCtrl.js');
var sliderHome       = require('./home/sliderHomeDirective.js');
//var countdown        = require('./home/countdownDirective.js');
//var articlesCtrl     = require('./articles/articleCtrl.js');
//var articlesService  = require('./articles/articleService.js');



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

                .state('login', {
                    url: '/login',
                    templateUrl: 'login.html',
                    controller: 'loginCtrl'
                })
            }
        );

    // SERVICES ============================================
    blogApp.service('articleService', ['$http', function($http, $scope) {


        this.getApiArticles = function() {
            return $http.get('/api/articles')
                //.success ne marche pas avec angular 1.6 ??
                .then(function (response) {
                    return response;
                    $scope.articles = response.data;
            }, function (data) {
                console.log('Error: ', data);
            });

        };

        this.createArticle = function () {
            return $http.post('/api/articles')
                .then(function (response) {
                    $scope.bookData = {};
                    $scope.articles = response.data;
                    console.log(response.data);
                }, function (data) {
                    console.log('Error: ', data);
                });
        };

        this.deleteArticle = function (id) {
            return $http.delete('/api/articles' + id)
                .success(function (response) {
                    $scope.articles = data.data.articles;
                    console.log(data);
                })
                .error(function (data) {
                    console.log('Error: ', data);
                });
        };



    }]);

    // CONTROLLERS ============================================
    blogApp.controller('homeCtrl', home);

    blogApp.controller('articlesCtrl', ['$scope', 'articleService', '$http', function ($scope, articleService, $http) {

        articleService.getApiArticles = function(articleData) {
            debugger
        };

        // $scope.articlesData = {};
        // this.getApiArticles = function() {
        //      $http.get('/api/articles')
        //         //.success ne marche pas avec angular 1.6 ??
        //         .then(function (response) {
        //             debugger
        //             $scope.articles = response.data;
        //     }, function (data) {
        //         console.log('Error: ', data);
        //     });
        //
        // };



        // var receiveArticleData = articleService.getApiArticles().then(function(response) {
        //
        //
        //     $scope.articles = response.data;
        //
        // });
        //
        //
        // $scope.renderTitleArticles = articleService.createArticle().then(function(response) {
        //     if(response.data) {
        //         for(var i=0; i < response.data.articles.length; i++) {
        //
        //             response.data.articles[i].text;
        //         }
        //     }
        // });

    }]);

    // DIRECTIVES ============================================

    blogApp.directive('sliderHome', sliderHome);

    // blogApp.directive('countdown', function() {
    //     return {
    //         restrict: 'E',
    //         templateUrl: 'countdown.html'
    //         scope: {},
    //         link: function($scope) {
    //             debugger
    //         }
    //     }
    // });

}());
