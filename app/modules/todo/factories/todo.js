function TodoFactory(){
    var factory = {
        getApiGitSearch     : _getApiGitSearch
    };

    return factory;


    function _getApiGitSearch(res){
        if( angular.isUndefined(res) ){
            return;
        }
        if( angular.isUndefined(res.data) ){
            return;
        }
        if( angular.isUndefined(res.data.items) ){
            return;
        }
        var result = [];

        angular.forEach( res.data.items, function(item){
            result.push( _facGitSearchApi( item ) );
        });
        return  result;
    }

    function _facGitSearchApi( data ){
        var result = {};
        if( angular.isUndefined(data) ){
            return;
        }
        if( angular.isDefined(data.id) ){
            result.id = data.id;
        }
        if( angular.isDefined(data.login) ){
            result.login = data.login;
        }
        if( angular.isDefined(data.avatar_url) ){
            result.avatar = data.avatar_url;
        }
        if( angular.isDefined(data.html_url) ){
            result.gitUri = data.html_url;
        }
        return result;
    }
}

angular.module("todoApp").factory("TodoFactory", TodoFactory);