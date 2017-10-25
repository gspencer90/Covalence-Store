angular.module('CovalenceStore', ['ngRoute', 'ngResource', 'store.controllers', 'store.factories', 'store.directives'])

.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl: 'views/welcome.html',
	})
	.when('/apparel', {
		templateUrl: 'views/apparel.html',
		controller: 'ApparelController'
	})
	.when('/misc', {
		templateUrl: 'views/misc.html',
		controller: 'MiscController'
	})
	.when('/apparel/:id', {
		templateUrl: 'views/single_view.html',
		controller: 'SingleController'
	})
	.when('/misc/:id', {
		templateUrl: 'views/single_view.html',
		controller: 'SingleController'
	})
	.when('/contact', {
		templateUrl: 'views/template.html',
		controller: 'ContactController'
	})
	.when('/cart', {
		templateUrl: 'views/cart.html',
		controller: 'CartController'
	})
	.otherwise({
		redirectTo: '/'
	})
}])