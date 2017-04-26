//require('./app/appModule.js');
//https://scotch.io/tutorials/animating-angularjs-apps-ngview

//ici je déclenche la compilation du fichier css
require('../../scss/main.scss');


var angular          = require('angular');
var home             = require('./home/homeCtrl.js');
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
    blogApp.service('articleService', ['$http', function($http) {
        this.getApiArticles = function() {
            return $http.get('/api/articles')
                //.success ne marche pas avec angular 1.6 ??
                .then(function (response) {
                    debugger
                    return response;

                    // if(response.data) {
                    //     for(var i=0; i < response.data.articles.length; i++) {
                    //         debugger
                    //         $scope.articles.text = response.data.articles[i].text;
                    //     }
                    // }


                console.log('mes articles :',$scope.articles);

            }, function (data) {
                console.log('Error: ', data);
            });

        };

        this.createArticle = function () {
            return $http.post('/api/articles', $scope.bookData)
                .then(function (response) {
                    debugger
                    $scope.bookData = {};
                    $scope.bookData.article = response.data;
                    console.log(data);
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

    blogApp.controller('articlesCtrl', ['$scope', 'articleService', function ($scope, articleService) {

        $scope.articlesData = {};

        var receiveArticleData = articleService.getApiArticles().then(function(response) {
            debugger
            $scope.articles = response.data;


        })

    }]);






}());
