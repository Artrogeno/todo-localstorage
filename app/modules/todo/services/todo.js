function TodoService( $http ){

    var uri = "https://api.github.com/";
    
    var service = {
        getUserApiGit       : _getUserApiGit,
        searchUserApiList   : _searchUserApiList
    };

    return service;

    function _getUserApiGit(){
        return $http.get( uri + 'users' );
    }

    function _searchUserApiList( user ){
        return $http.get( uri + 'search/users?q=' + user );
    }
    
}


angular.module("todoApp").service("TodoService", TodoService);