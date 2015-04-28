module.exports = ng(function($stateProvider, $urlRouterProvider) {
    
    // Routes
    require('./routes')($stateProvider);
    $urlRouterProvider.otherwise('/');

});
