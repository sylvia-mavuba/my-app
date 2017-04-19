module.exports = function ($http) {
    return {
        get : function() {
            return $http.get('/api/articles');
        },
        create : function(data) {
            return $http.post('/api/articles', data);
        },
        delete : function(id) {
            return $http.delete('/api/articles' + id);
        }
    }
}
