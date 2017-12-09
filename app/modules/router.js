function config($stateProvider, $httpProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('dashboard');

    $stateProvider
        .state('main', {
            url: '/',
            abstract: true,
            controller: 'MainCtrl as vm',
            templateUrl: 'modules/commons/views/main.html'
        })
        .state('main.dashboard', {
            url: 'dashboard',
            controller: 'DashCtrl as vm',
            templateUrl: 'modules/todo/views/dash.html'
        })
        .state('main.todo', {
            url: 'todo',
            controller: 'TodoCtrl as vm',
            templateUrl: 'modules/todo/views/todo.html'
        })
        .state('main.todo-update', {
            url: 'todo/update/:id',
            controller: 'TodoUpdateCtrl as vm',
            templateUrl: 'modules/todo/views/todo.update.html'
        });
}

angular.module('todoApp').config(config);