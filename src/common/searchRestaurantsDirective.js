(function () {
    var searchRestaurantsDirective = function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'commonViews/views/search-restaurant-component.html',
            scope:{},
            link: function(scope, element, attrs){
                console.log('je suis dans la directive search');

            },
            controller: function() {
                debugger
            },
            controllerAs: 'searchRestaurantsCtrl'
        };
    };

    angular.module('blogApp.Common');
    angular.directive('searchRestaurants', searchRestaurantsDirective);
});
