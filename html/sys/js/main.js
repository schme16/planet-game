angular.module('xxxx-xxxx - planet-game', [])

/*The master controller*/
.controller('master', function master($scope) {
	m = $scope
})

/*Turns off the ng-scope, et al. debug classes*/
.config(['$compileProvider', function ($compileProvider) {
	$compileProvider.debugInfoEnabled(false);
}])



/*Directives*/
/*.directive('test', function () {
	return {
		restrict: 'E',
		scope: true,
		//templateUrl: '',
		//transclude: true,
		link: function (scope, element, attrs) {
		}
	}
})*/