// //require('./articleService.js');
// //var getExistingArticleData = require('./articleService').getExistingArticleData;
//
// module.exports = function ($scope, $http, $q, articlesService) {
//     console.log('je suis dans le controller articles');
//
//     $scope.bookData = {};
//
//     // this.getApiArticles = function() {
//     //     $http.get('/api/articles')
//     //         //.success ne marche pas avec angular 1.6 ??
//     //         .then(function (response, resp) {
//     //             debugger
//     //             return response;
//     //
//     //             // if(response.data) {
//     //             //     for(var i=0; i < response.data.articles.length; i++) {
//     //             //         debugger
//     //             //         $scope.articles.text = response.data.articles[i].text;
//     //             //     }
//     //             // }
//     //
//     //
//     //         console.log('mes articles :',$scope.articles);
//     //
//     //     }, function (data) {
//     //         console.log('Error: ', data);
//     //     });
//     //
//     // }
//
//     var receiveArticleData = articlesService.getApiArticles().then(function(response) {
//         $scope.receiveArticleData = response.data;
//     })
//
//     $scope.createArticle = function () {
//         $http.post('/api/articles', $scope.bookData)
//             .then(function (response) {
//                 debugger
//                 $scope.bookData = {};
//                 $scope.bookData.article = response.data;
//                 console.log(data);
//             }, function (data) {
//                 console.log('Error: ', data);
//             });
//     }
//
//     $scope.deleteArticle = function (id) {
//         $http.delete('/api/articles' + id)
//             .success(function (response) {
//                 $scope.articles = data.data.articles;
//                 console.log(data);
//             })
//             .error(function (data) {
//                 console.log('Error: ', data);
//             });
//     }
//
//     $scope.getTotalArticles = function() {
//         return $scope.articles.length;
//     }
//
// }
