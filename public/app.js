webpackJsonp([0],{

/***/ 190:
/***/ (function(module, exports) {

//require('./api-article.js');

module.exports = function ($scope, $http) {
    console.log('je suis dans le controller articles');

    $scope.formData = {};

    $http.get('/api/articles')
    // .success(function (data) {
    //     $scope.articles = data;
    //     console.log(data);
    // })
    // .error(function (data) {
    //     console.log('Error: ', data);
    // })

    .then(function (data) {
        debugger;
        $scope.articles = data.data.articles;
        $scope.articles.autor = data.data.articles.autor;
        console.log(data);
    }, function (data) {
        console.log('Error: ', data);
    });

    $scope.createArticle = function () {
        $http.post('/api/articles', $scope.formData).then(function (data) {
            $scope.formData = {};
            $scope.articles = data.data.articles;
            console.log(data);
        }, function (data) {
            console.log('Error: ', data);
        });
    };

    $scope.deleteArticle = function (id) {
        $http.delete('/api/articles' + id).success(function (data) {
            $scope.articles = data.data.articles;
            console.log(data);
        }).error(function (data) {
            console.log('Error: ', data);
        });
    };
};

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = function ($http) {
    return {
        get: function () {
            return $http.get('/api/articles');
        },
        create: function (data) {
            return $http.post('/api/articles', data);
        },
        delete: function (id) {
            return $http.delete('/api/articles' + id);
        }
    };
};

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = function ($scope) {
    vm = this;
    //debugger
    console.log('je suis dans la home');

    vm.showRestaurant = function () {};
};

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

//require('./app/appModule.js');
//https://scotch.io/tutorials/animating-angularjs-apps-ngview

//ici je déclenche la compilation du fichier css
__webpack_require__(193);

var angular = __webpack_require__(30);
var home = __webpack_require__(192);
var articles = __webpack_require__(190);
var articlesService = __webpack_require__(191);
//var loadRestaurants  = require('./home/getRestaurants').getRestaurant;

(function () {
    'use strict';

    var blogApp = angular.module('blogApp', ['ui.router']);

    blogApp.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        // STATES ===============================================
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        }).state('articles', {
            url: '/articles',
            templateUrl: 'articles.html',
            controller: 'articlesCtrl'
        });
    });

    // CONTROLLERS ============================================
    blogApp.controller('homeCtrl', home);

    blogApp.controller('articlesCtrl', articles);

    // SERVICES ============================================
    blogApp.service('articleService', articlesService);
})();

/***/ })

},[206]);