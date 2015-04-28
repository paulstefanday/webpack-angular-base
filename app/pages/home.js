export default ngModule => {

	if (ON_TEST) {
		require('./home.test')(ngModule);
	}

	ngModule.directive('home', () => {
		require('./home.less');
		return {
			restrict: 'E',
			scope: {},
			template: require('./home.jade'),
			controllerAs: 'home',
			controller: ng(function($scope) {
				

			})
		};
	});
};
