function TodoCtrl( StorageService, TodoService, TodoFactory ) {
    var vm = this;
    vm.pageTitle    = 'Todo <small>list</small>';   
    vm.users        =  {};
    vm.search       =  "";
    vm.searchList   =  [];
    
    vm.searchUsers   = _searchUsers;
    vm.addUser       = _addUser;
    vm.deleteUser    = _deleteUser;

    _init();

    function _init() {
        vm.search = "";
        vm.searchList = [];
        vm.users = StorageService.listUser();
    }

    function _searchUsers(){
        if( (vm.search).length > 3 ){
            TodoService.searchUserApiList(vm.search).then( _searchSuccess, _searchError );
        }
    }

    function _searchSuccess(response){
        vm.searchList =   TodoFactory.getApiGitSearch( response );
    }

    function _searchError(error){
        console.log(error);   
    }

    function _addUser( item ){
        StorageService.createUser( item );
        _init();
    }

    function _deleteUser( item ){
        StorageService.deleteUser(item);
        _init();
    }

}

angular.module('todoApp')
    .controller('TodoCtrl', TodoCtrl);