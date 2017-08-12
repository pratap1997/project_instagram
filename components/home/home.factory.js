myApp.factory('homeFact', function ($http) {
    return {
        doSignUp: function (data) {
            return $http.post('http://localhost:8088/api/user', data)
        }
    }
})