angular.module('store.factories', ['ngResource'])

.factory('Product', ['$resource', function($resource){
	return $resource('/api/products/:id', {
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