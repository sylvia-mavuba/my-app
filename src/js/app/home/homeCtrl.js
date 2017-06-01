//var loadResult = require('./getRestaurants').getRestaurant;
var moment          = require('moment');
var $               = require('jquery');

module.exports = function ($scope, $http) {


    function timer(settings){
        //debugger
        var config = {
            endDate: '2017-06-24 16:00:00',
            planeDate: '2017-06-24 16:00:00',
            maldivesDate: '2017-06-26 9:30:00',
            timeZone: 'Europe/Dublin',
            hours: $('#hours'),
            minutes: $('#minutes'),
            seconds: $('#seconds'),
            newSubMessage: 'and should be back online in a few minutes...'
        };

        //Je m'assure d'avoir un 0 avant les chiffres
        function prependZero(number){
            return number < 10 ? '0' + number : number;
        }

        $.extend(true, config, settings || {});

        var currentTime = moment();
        //Wedding
        var endDate = moment.tz(config.endDate, config.timeZone);
        var diffTime = endDate.valueOf() - currentTime.valueOf();  //valueOf() nombre de milliseconds écoulée
        var duration = moment.duration(diffTime, 'milliseconds');
        var days = duration.days();
        var interval = 1000;
        var subMessage = $('.sub-message');
        var clock = $('.clock');

        //Plane
        var departure = moment.tz(config.planeDate, config.timeZone);
        var departureDiffTime = departure.valueOf() - currentTime.valueOf();
        var durationPlane = moment.duration(departureDiffTime, 'milliseconds');

        //Maldives
        var arrival = moment.tz(config.maldivesDate, config.timeZone);
        var arrivalDiffTime = arrival.valueOf() - currentTime.valueOf();
        var durationMaldives = moment.duration(arrivalDiffTime, 'milliseconds');



        if(diffTime < 0){
            endEvent(subMessage, config.newSubMessage, clock);
            return;
        }
        //debugger

        if(days > 0){
            $('#days').text(prependZero(days));
            //$('.days').css('display', 'inline-block');
        }


        var intervalID = setInterval(function(){
            duration = moment.duration(duration - interval, 'milliseconds');
            var hours = duration.hours(),
                minutes = duration.minutes(),
                seconds = duration.seconds();
            days = duration.days();
            if(hours  <= 0 && minutes <= 0 && seconds  <= 0 && days <= 0){
                clearInterval(intervalID);
                endEvent(subMessage, config.newSubMessage, clock);
                window.location.reload();
            }
            if(days === 0){
                $('.days').hide();
            }
            $('#days').text(prependZero(days));
            config.hours.text(prependZero(hours));
            config.minutes.text(prependZero(minutes));
            config.seconds.text(prependZero(seconds));
        }, interval);
    }

    function endEvent($el, newText, hideEl){
        $el.text(newText);
        hideEl.hide();
    }

    timer();
}

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
