//var loadResult = require('./getRestaurants').getRestaurant;

module.exports = function ($scope, $http) {

    console.log('je suis dans la home');

    $scope.searchInfo = {};

    $scope.showRestaurant = function(inputValue, $http) {
        debugger

        // var renderKeyWord = function() {
        //     var space = ' ';
        //     $scope.searchInfo.inputValue;
        // }

        var showKeyWord = function() {
            var inputValue = $scope.searchInfo.inputValue;
        }

        debugger



        // loadResult(inputValue, function(data, $http) {
        //     debugger
        // });

    }

    $http.get('/api/restaurants')
        .then(function (response) {
            //$scope.response = response.data;
            console.log('mes restaurants: ',response.data);
        }, function (response) {
            console.log('Error: ', response);
        });
}
