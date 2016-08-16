angular.module('mooshApp', []).service('mooshProvider', ['$http', function ($http) {
    return {
        getAll: function() {
            return $http.get('/api.php?moosh=all');
        }
    }
}]);
