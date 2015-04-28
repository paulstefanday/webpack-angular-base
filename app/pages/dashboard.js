export default ngModule => {

	if (ON_TEST) {
		require('./dashboard.test')(ngModule);
	}

	ngModule.directive('dashboard', () => {
		require('./dashboard.less');
		return {
			restrict: 'E',
			scope: {},
			template: require('./dashboard.jade'),
			controllerAs: 'dashboard',
			controller: ng(function($scope) {
				

			})
		};
	});
};
