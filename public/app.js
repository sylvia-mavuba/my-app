webpackJsonp([0],{

/***/ 118:
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

    //.success ne marche pas avec angular 1.6
    .then(function (data) {
        $scope.articles = data;
        console.log(data);
    }, function (data) {
        console.log('Error: ', data);
    });

    $scope.createArticle = function () {
        $http.post('/api/articles', $scope.formData).then(function (data) {
            $scope.formData = {};
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

/***/ 119:
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

/***/ 120:
/***/ (function(module, exports) {

//var loadResult = require('./getRestaurants').getRestaurant;

module.exports = function ($scope, $http) {

    console.log('je suis dans la home');

    $scope.searchInfo = {};

    $scope.showRestaurant = function (inputValue, $http) {
        debugger;

        // var renderKeyWord = function() {
        //     var space = ' ';
        //     $scope.searchInfo.inputValue;
        // }

        var showKeyWord = function () {
            var inputValue = $scope.searchInfo.inputValue;
        };

        debugger;

        // loadResult(inputValue, function(data, $http) {
        //     debugger
        // });
    };

    $http.get('/api/restaurants').then(function (response) {
        //$scope.response = response.data;
        console.log(response);
    }, function (response) {
        console.log('Error: ', response);
    });
};

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

//require('./app/appModule.js');
//https://scotch.io/tutorials/animating-angularjs-apps-ngview

//ici je déclenche la compilation du fichier css
__webpack_require__(121);

var angular = __webpack_require__(1);
var home = __webpack_require__(120);
var articles = __webpack_require__(118);
var articlesService = __webpack_require__(119);
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
        }).state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: 'loginCtrl'
        });
    });

    // CONTROLLERS ============================================
    blogApp.controller('homeCtrl', home);

    blogApp.controller('articlesCtrl', articles);

    // SERVICES ============================================
    blogApp.service('articleService', articlesService);
})();

/***/ })

},[125]);