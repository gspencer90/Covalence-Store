angular.module('store.directives', [])
.directive('mainNav', [function() {
	return {
		templateUrl: 'directives/navbar.html',
		restrict: 'E'
	};
}])