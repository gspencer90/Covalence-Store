angular.module('store.controllers', ['ngRoute'])

.controller('ApparelController', ['$scope', function ($scope) {
}])

.controller('MiscController', ['$scope', function ($scope){
	
}])

.controller('SingleController', ['$scope', function ($scope){
	
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



