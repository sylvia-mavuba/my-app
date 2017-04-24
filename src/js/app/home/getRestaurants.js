var loadResult = function(inputValue, resp) {

    //var URL = '/api/restaurants';

    // $.ajax({
    //     url: URL,
    //     type: 'GET',
    //     data: JSON.stringify(inputValue),
    //     contentType: "application/json; charset=UTF-8",
    //     success: function(data) {
    //         resp(data);
    //     }
    // });

    $http({
        url: '/api/restaurants',
        method: 'GET',
        data: JSON.stringify(inputValue)
    }).success(function (response) {
        resp(response.data);
        $scope.response = response.data;
    }).error(function (data) {
        console.log('Error reponse resto: ',data);
    })
};

module.exports.getRestaurant = loadResult;
