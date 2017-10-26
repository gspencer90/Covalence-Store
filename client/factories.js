angular.module('store.factories', [])

.factory('Product', ['$resource', function($resource){
	return $resource('/api/products/:id', {
		id: '@id'
	})
}])

.factory('Misc',['$resource', function($resource){
	return $resource('/api/misc',{
		id: '@id'
	})
}])

.factory('Category', ['$resource', function($resource){
	return $resource('/api/categories/:id', {
		id: '@id'
	})
}])
.factory('ContactForm',['$resource',function($resource){
	return $resource('/api/contactforms/:id',{ id: '@id'})
}])
// .factory('Category', ['$resource', function($resource){
// 	return $resource('/api/categories/:id', {
// 		id: '@id'
// 	})
// }])

.factory('Purchase', ['$resource', function($resource) {
	return $resource('/api/purchases/:id', {
		id: '@id'
	})
}])

.factory('Apparel', ['$resource', function($resource) {
	return $resource('/api/apparel')
}])