// module.exports = function ($http, $q) {
//
//     this.getApiArticles = function() {
//         $http.get('/api/articles')
//             //.success ne marche pas avec angular 1.6 ??
//             .then(function (response, resp) {
//                 debugger
//                 return response;
//
//                 // if(response.data) {
//                 //     for(var i=0; i < response.data.articles.length; i++) {
//                 //         debugger
//                 //         $scope.articles.text = response.data.articles[i].text;
//                 //     }
//                 // }
//
//
//             console.log('mes articles :',$scope.articles);
//
//         }, function (data) {
//             console.log('Error: ', data);
//         });
//
//     }
//
// }
