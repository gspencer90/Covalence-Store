angular.module('store.controllers', ['ngRoute'])

.controller('ApparelController', [
    '$scope', 
    '$location', 
    '$resource', 
    'Product', function ($scope, $location, $resource, Product) {
        $scope.toApparel() = function() {
            $location.path('/apparel');
        };
        $scope.addToCart = function() {
            
        }
}])

.controller('MiscController', ['$scope', function ($scope){
	
}])

.controller('SingleController', ['$scope', 'Product', '$routeParams', function ($scope, Product, $routeParams) {
	$scope.product = Product.get({
        id: $routeParams.id
    })

}])

.controller('ContactController', ['$scope', function ($scope){
	
}])

.controller('CartController', [
    '$scope', 
    'Purchase', 
    '$location',
    'stripe', function ($scope, Purchase, $location, stripe){
    let elements = stripe.elements();
    let card = elements.create("card");
    card.mount('#card-field');

    $scope.purchase = function() {
        stripe.createToken(card)
        .then(function(result) {
            if(result.error) {
                $scope.error = result.error.message;
            } else {
                let p = new Purchase({
                    token: result.token.id,
                    amount: $scope.amount
                });

                p.$save(
                    function() {
                        alert("Thank you for your purchase! You will receive a summary email shortly!");
                        $location.path('/');
                    }, 
                    function(err) {
                        $scope.err = err;
                    }
                )
            }
        })
    }
}])



