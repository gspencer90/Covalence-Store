angular.module('store.directives', [])
.directive('mainNav', [function() {
	return {
		templateUrl: 'directives/navbar.html',
		restrict: 'E',
		scope: {
			activePage: '='
		}
	};
}])
.directive('mainFooter', [function() {
	return {
		templateUrl: 'directives/footer.html',
		restrict: 'E'
	};
}])