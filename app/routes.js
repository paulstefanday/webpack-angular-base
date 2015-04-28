export default $stateProvider => {

    $stateProvider
        .state('home',       { url: '/',                 template: '<home />' })
        .state('dashboard',  { url: '/dashboard',        template: '<dashboard />' });

}