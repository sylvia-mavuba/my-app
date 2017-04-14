webpackJsonp([0],{

/***/ 118:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

//require('./app/appModule.js');
//https://scotch.io/tutorials/animating-angularjs-apps-ngview

//ici je déclenche la compilation du fichier css
__webpack_require__(118);

var angular = __webpack_require__(2);
var home = __webpack_require__(126);

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

        }).state('about', {
            url: '/about',
            templateUrl: 'about.html',
            controller: 'aboutCtrl'
        });
    });

    // CONTROLLERS ============================================
    blogApp.controller('homeCtrl', home);

    blogApp.controller('aboutCtrl', function ($scope) {
        debugger;
        console.log('je suis dans about');
    });
})();

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

module.exports = function ($scope) {
    debugger;
    console.log('je suis dans la home');
};

/***/ })

},[121]);