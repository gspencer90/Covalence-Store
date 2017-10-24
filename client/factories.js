angular.module('store.factories', ['ngResource'])

.factory('Apparel', ['$resource', function($resource){
	return $resource('/api/apparel/:id', {
		id: '@id'
	})
}])

.factory('Misc', ['$resource', function($resource){
	return $resource('/api/misc/:id', {
		id: '@id'
	})
}])

.factory('Category', ['$resource', function($resource){
	return $resource('/api/categories/:id', {
		id: '@id'
	})
}])

.factory('Purchase', ['$resource', function($resource) {
	return $resource('/api/purchases/:id', {
		id: '@id'
	})
}])