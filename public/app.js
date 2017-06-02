webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

//var loadResult = require('./getRestaurants').getRestaurant;
var moment = __webpack_require__(0);
var $ = __webpack_require__(2);
var _ = __webpack_require__(123);

module.exports = function ($scope, $http) {

    function timer(settings) {
        //debugger
        var endDate = {
            wedding: '2017-06-24 16:00:00',
            plane: '2017-06-24 16:00:00',
            holidays: '2017-06-26 9:30:00'
        };

        var config = {
            // endDate: '2017-06-24 16:00:00',
            // planeDate: '2017-06-24 16:00:00',
            // maldivesDate: '2017-06-26 9:30:00',
            timeZone: 'Europe/Dublin',
            // hours: $('#hours'),
            // minutes: $('#minutes'),
            // seconds: $('#seconds'),
            newSubMessage: 'and should be back online in a few minutes...'
        };

        var dateEvent = '';

        // var getEndDateEvent = function (endDate) {
        //     var config = {
        //         endDate: endDate
        //     }
        // }
        //
        // getEndDateEvent(config.endDate); //wedding
        // getEndDateEvent(config.planeDate); // plane

        //debugger

        //Je m'assure d'avoir un 0 avant les chiffres


        $.extend(true, config, settings, endDate || {});

        var renderEvent = function (config, settings, endDate) {
            var endDate = {
                wedding: '2017-06-24 16:00:00',
                plane: '2017-06-24 16:00:00',
                holidays: '2017-06-26 9:30:00'
            };

            var config = {
                // endDate: '2017-06-24 16:00:00',
                // planeDate: '2017-06-24 16:00:00',
                // maldivesDate: '2017-06-26 9:30:00',
                timeZone: 'Europe/Dublin',
                // hours: $('#hours'),
                // minutes: $('#minutes'),
                // seconds: $('#seconds'),
                newSubMessage: 'and should be back online in a few minutes...'
            };

            var dateEvent = '';
            var endDate = {
                wedding: '2017-06-24 16:00:00',
                plane: '2017-06-24 16:00:00',
                holidays: '2017-06-26 9:30:00'
            };

            debugger;
            var arr = _.toArray(endDate);

            for (var i = 0; i < arr.length; i++) {

                function prependZero(number) {
                    return number < 10 ? '0' + number : number;
                }

                var dateEvent = arr[i];
                var currentTime = moment();

                var endDate = moment.tz(dateEvent, config.timeZone);
                var diffTime = endDate.valueOf() - currentTime.valueOf(); //valueOf() nombre de milliseconds écoulée
                var duration = moment.duration(diffTime, 'milliseconds');
                var days = duration.days();
                var interval = 1000;
                var subMessage = $('.sub-message');
                var clock = $('.clock');

                if (diffTime < 0) {
                    endEvent(subMessage, config.newSubMessage, clock);
                    return;
                }
                //debugger

                if (days > 0) {
                    $('#days').text(prependZero(days));
                    //$('.days').css('display', 'inline-block');
                }

                var intervalID = setInterval(function () {
                    duration = moment.duration(duration - interval, 'milliseconds');
                    var hours = duration.hours(),
                        minutes = duration.minutes(),
                        seconds = duration.seconds();
                    debugger;
                    days = duration.days();
                    if (hours <= 0 && minutes <= 0 && seconds <= 0 && days <= 0) {
                        clearInterval(intervalID);
                        endEvent(subMessage, config.newSubMessage, clock);
                        window.location.reload();
                    }
                    if (days === 0) {
                        $('.days').hide();
                    }

                    var space = '';

                    space += '<div id="days">' + prependZero(days) + '</div>' + '<div id="hours">' + prependZero(hours) + '</div>' + '<div id="minutes">' + prependZero(minutes) + '</div>' + '<div id="seconds">' + prependZero(seconds) + '</div>';
                    $('.toto').append(space);
                    // $('#days').text(prependZero(days));
                    // config.hours.text(prependZero(hours));
                    //
                    // config.minutes.text(prependZero(minutes));
                    // config.seconds.text(prependZero(seconds));
                }, interval);
            }
        };
        //renderEvent();

        console.log(dateEvent);

        debugger;
    }

    function endEvent($el, newText, hideEl) {
        $el.text(newText);
        hideEl.hide();
    }

    timer();
};

// return {
//     restrict: 'E',
//     scope: {},
//     templateUrl: 'countdown.html',
//     // link: function($scope) {
//     //     debugger
//     //     function timer(settings){
//     //         debugger
//     //         var config = {
//     //             endDate: '2017-06-24 16:00:00',
//     //             planeDate: '2017-06-24 16:00:00',
//     //             maldivesDate: '2017-06-26 9:30:00',
//     //             timeZone: 'Europe/Dublin',
//     //             hours: $('#hours'),
//     //             minutes: $('#minutes'),
//     //             seconds: $('#seconds'),
//     //             newSubMessage: 'and should be back online in a few minutes...'
//     //         };
//     //
//     //         //Je m'assure d'avoir un 0 avant les chiffres
//     //         function prependZero(number){
//     //             debugger
//     //             return number < 10 ? '0' + number : number;
//     //         }
//     //
//     //         $.extend(true, config, settings || {});
//     //
//     //         var currentTime = moment();
//     //         //Wedding
//     //         var endDate = moment.tz(config.endDate, config.timeZone);
//     //         var diffTime = endDate.valueOf() - currentTime.valueOf();  //valueOf() nombre de milliseconds écoulée
//     //         var duration = moment.duration(diffTime, 'milliseconds');
//     //         var days = duration.days();
//     //         var interval = 1000;
//     //         var subMessage = $('.sub-message');
//     //         var clock = $('.clock');
//     //
//     //         //Plane
//     //         var departure = moment.tz(config.planeDate, config.timeZone);
//     //         var departureDiffTime = departure.valueOf() - currentTime.valueOf();
//     //         var durationPlane = moment.duration(departureDiffTime, 'milliseconds');
//     //
//     //         //Maldives
//     //         var arrival = moment.tz(config.maldivesDate, config.timeZone);
//     //         var arrivalDiffTime = arrival.valueOf() - currentTime.valueOf();
//     //         var durationMaldives = moment.duration(arrivalDiffTime, 'milliseconds');
//     //
//     //
//     //         if(diffTime < 0){
//     //             endEvent(subMessage, config.newSubMessage, clock);
//     //             return;
//     //         }
//     //         debugger
//     //
//     //         if(days > 0){
//     //             $('#days').text(prependZero(days));
//     //             $('.days').css('display', 'inline-block');
//     //         }
//     //
//     //
//     //         var intervalID = setInterval(function(){
//     //             duration = moment.duration(duration - interval, 'milliseconds');
//     //             var hours = duration.hours(),
//     //                 minutes = duration.minutes(),
//     //                 seconds = duration.seconds();
//     //             days = duration.days();
//     //             if(hours  <= 0 && minutes <= 0 && seconds  <= 0 && days <= 0){
//     //                 clearInterval(intervalID);
//     //                 endEvent(subMessage, config.newSubMessage, clock);
//     //                 window.location.reload();
//     //             }
//     //             if(days === 0){
//     //                 $('.days').hide();
//     //             }
//     //             $('#days').text(prependZero(days));
//     //             config.hours.text(prependZero(hours));
//     //             config.minutes.text(prependZero(minutes));
//     //             config.seconds.text(prependZero(seconds));
//     //         }, interval);
//     //     }
//     //
//     //     function endEvent($el, newText, hideEl){
//     //         $el.text(newText);
//     //         hideEl.hide();
//     //     }
//     //
//     //     timer();
//     // }
//
//
// }

//
// var now = moment();
// var dateNow = moment(now).format('MMM Do YY')
// var jourJ = moment('20170624').format('MMM Do YY');
// var diff = moment(dateNow).subtract(jourJ, 'days');
//
// debugger
//
// $scope.searchInfo = {};
//
// $scope.showRestaurant = function(inputValue, $http) {
//
//
//     // var renderKeyWord = function() {
//     //     var space = ' ';
//     //     $scope.searchInfo.inputValue;
//     // }
//
//     var showKeyWord = function() {
//         var inputValue = $scope.searchInfo.inputValue;
//     }
//
//
//
//
//
//     // loadResult(inputValue, function(data, $http) {
//     //     debugger
//     // });
//
// }
//
// $http.get('/api/restaurants')
//     .then(function (response) {
//         //$scope.response = response.data;
//         console.log('mes restaurants: ',response.data);
//     }, function (response) {
//         console.log('Error: ', response);
//     });
//}

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

module.exports = function ($scope, $http) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "sliderHome.html",

        link: function () {
            debugger;
            var touchstartX = 0,
                touchstartY = 0,
                touchendX = 0,
                touchendY = 0;

            var gesturedZone = document.querySelector('.swipe-zone');
            var $swipeZone = $('.swipe-zone'),
                $sliderNav = $('.slider-navigation ul li'),
                id;

            gesturedZone.addEventListener('touchstart', function (e) {
                touchstartX = e.changedTouches[0].screenX;
                touchstartY = e.changedTouches[0].screenY;
            }, false);

            gesturedZone.addEventListener('touchend', function (e) {
                touchendX = e.changedTouches[0].screenX;
                touchendY = e.changedTouches[0].screenY;
                handleGesure(e);
            }, false);

            var handleGesure = function (e) {
                if (touchendX < touchstartX) {
                    swipe(e, 'left');
                }
                if (touchendX > touchstartX) {
                    swipe(e, 'right');
                }
                // if (touchendY < touchstartY) {
                //     console.log(swiped + 'down!');
                // }
                // if (touchendY > touchstartY) {
                //     console.log(swiped + 'up!');
                // }
                // if (touchendY == touchstartY) {
                //     console.log('tap!');
                // }
            };

            var swipe = function (e, direction) {
                var $target = $(e.target).parents('.slider-component__slide');

                if (direction === 'left') {
                    id = $target.next().data('slide');
                } else if (direction === 'right') {
                    id = $target.prev().data('slide');
                }
                if (typeof id === 'number') {
                    $swipeZone.css({ 'transform': 'translateX(' + -100 * id + '%)' });
                    $sliderNav.removeClass('active');
                    $sliderNav.eq(id).addClass('active');
                }
            };
        }
    };
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
var home = __webpack_require__(119);
var sliderHome = __webpack_require__(120);
//var countdown        = require('./home/countdownDirective.js');
//var articlesCtrl     = require('./articles/articleCtrl.js');
//var articlesService  = require('./articles/articleService.js');


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

    // SERVICES ============================================
    blogApp.service('articleService', ['$http', function ($http, $scope) {

        this.getApiArticles = function () {
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
            return $http.post('/api/articles').then(function (response) {
                $scope.bookData = {};
                $scope.articles = response.data;
                console.log(response.data);
            }, function (data) {
                console.log('Error: ', data);
            });
        };

        this.deleteArticle = function (id) {
            return $http.delete('/api/articles' + id).success(function (response) {
                $scope.articles = data.data.articles;
                console.log(data);
            }).error(function (data) {
                console.log('Error: ', data);
            });
        };
    }]);

    // CONTROLLERS ============================================
    blogApp.controller('homeCtrl', home);

    blogApp.controller('articlesCtrl', ['$scope', 'articleService', '$http', function ($scope, articleService, $http) {

        articleService.getApiArticles = function (articleData) {
            debugger;
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
})();

/***/ })

},[125]);