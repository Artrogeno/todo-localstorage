function StorageService( $localStorage ){

    var storage = $localStorage;

    var service = {
        findUser    : _findUser,
        listUser    : _listUser,
        createUser  : _createUser,
        updateUser  : _updateUser,
        deleteUser  : _deleteUser
    };

    return service;

    function _findUser( id ){
        // confere se o storage do usuario existe 
        if( angular.isUndefined(storage.user) ){
            return;
        }
        var result = {};
        angular.forEach( storage.user, function( item ) {
            if( item.id == id ){
                result = item;
            }
        });
        return result;
    }

    function _listUser(){
        // confere se o storage do usuario existe 
        if( angular.isUndefined(storage.user) ){
            return;
        }
        return storage.user;
    }

    function _createUser(data){
        // confere se o storage do usuario existe 
        if( angular.isUndefined(storage.user) ){
            storage.user = [];
        }
        // confere se o id do usuario ja exite no storage
        var check = true;
        angular.forEach( storage.user, function(item) {
            if( item.id == data.id ){
                check = false;
            }
        });
        if( check ){
            ( storage.user ).push(data);
        }
    }
    
    function _updateUser(data){
        // confere se o storage do usuario existe 
        if( angular.isUndefined(storage.user) ){
            return;
        }
        var result = {};
        angular.forEach( storage.user, function( item ) {
            if( item.id == data.id ){
                data = item;
            }
        });
        return true;
    }

    function _deleteUser(data){
        var index = storage.user.indexOf(data);
        storage.user.splice(index, 1);
    }
}

angular.module("todoApp").service("StorageService", StorageService);