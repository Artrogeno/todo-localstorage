function TodoUpdateCtrl( $state, $stateParams, StorageService ) {
    var vm = this;
    vm.pageTitle    = 'Todo <small>Update</small>';   
    vm.user         = {};
    vm.updateUser   = _updateUser;

    _init();

    function _init() {
        // Valida se existe o ID se nao vai redirecionanr para lista
        if( angular.isUndefined( $stateParams.id ) ){
            $state.go('main.todo');
        }
        // caso contrario vai buscar o usuario no storage
        var user = StorageService.findUser($stateParams.id);
        if( angular.isUndefined( user ) ){
            $state.go('main.todo');
        }
        vm.user = user;
    }
    
    function _updateUser(){
        var status = StorageService.updateUser( vm.user );
        if( status ){
            $state.go('main.todo');
        }
    }
}

angular.module('todoApp')
    .controller('TodoUpdateCtrl', TodoUpdateCtrl);