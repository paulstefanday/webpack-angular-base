export default ngModule => {

	if (ON_TEST) {
		require('./nav.test')(ngModule);
	}

	ngModule.directive('nav', () => {
		require('./nav.less');
		return {
			restrict: 'E',
			scope: {},
			template: require('./nav.jade'),
			controllerAs: 'nav',
			controller: ng(function($scope) {
				

			})
		};
	});
};
