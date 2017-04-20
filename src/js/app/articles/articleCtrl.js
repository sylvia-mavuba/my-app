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
            debugger
            $scope.articles = data.data.articles;
            $scope.articles.autor = data.data.articles.autor;
            console.log(data);
        }, function (data) {
            console.log('Error: ', data);
        });

    $scope.createArticle = function () {
        $http.post('/api/articles', $scope.formData)
            .then(function (data) {
                $scope.formData = {};
                $scope.articles = data.data.articles;
                console.log(data);
            }, function (data) {
                console.log('Error: ', data);
            });
    }

    $scope.deleteArticle = function (id) {
        $http.delete('/api/articles' + id)
            .success(function (data) {
                $scope.articles = data.data.articles;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ', data);
            });
    }

}
