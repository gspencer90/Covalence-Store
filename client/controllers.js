angular
  .module("store.controllers", ["ngRoute"])
  .controller("ApparelController", [
    "$scope",
    "$location",
    "$resource",
    "Apparel",
    "Product",
    function($scope, $location, $resource, Apparel, Product) {
      $scope.apparel = Apparel.query();
      $scope.addToCart = function() {
        // cache item to be added
      };
    }
  ])
  .controller("SingleController", [
    "$scope",
    "Product",
    "$routeParams",
    function($scope, Product, $routeParams) {
      $scope.product = Product.get({
        id: $routeParams.id
      });
      $scope.addToCart = function() {
        let item = {};
        let cartContents = [];
        item.title = $scope.product.title;
        item.price = $scope.product.price;
        item.image = $scope.product.imageurl;
        localStorage.setItem("item", JSON.stringify(item));
        cartContents.push(item);
        alert('Your item has been added to the shopping cart!');
        console.log(cartContents);
    }
    }
])
  .controller("MiscController", [
    "$scope",
    "Misc",
    "Product",
    "$routeParams",
    "$location",
    function($scope, Misc, Product, $routeParams, $location) {
      $scope.misc = Misc.query();
    }
  ])

  .controller("ContactController", [
    "$scope",
    "ContactForm",
    function($scope, ContactForm) {
      $scope.send = function() {
        let contact = new ContactForm({
          from: $scope.email,
          message: $scope.message
        });
        contact.$save(function() {
          alert("Thanks for your feedback!");
        }),
          function(err) {
            console.log(err);
          };
      };
    }
  ])

  .controller("CartController", [
    "$scope",
    "$location",
    function($scope, $location) {
        $scope.getCart = function($scope) {
          JSON.parse(item);
          $scope.product.title = item.title;
          $scope.product.price = item.price;
          $scope.product.imageurl = item.image;
        };
    }
  ])
  .controller("CheckoutController", [
    "$scope",
    "Purchase",
    "$location",
    function($scope, Purchase, $location) {
      let elements = stripe.elements();
      let card = elements.create("card", {
        style: {
          base: {
            iconColor: "#666EE8",
            color: "#31325F",
            lineHeight: "40px",
            fontWeight: 300,
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSize: "15px",

            "::placeholder": {
              color: "#CFD7E0"
            }
          }
        }
      });
      card.mount("#card-field");

      $scope.purchase = function() {
        stripe.createToken(card).then(function(result) {
          if (result.error) {
            $scope.error = result.error.message;
          } else {
            let p = new Purchase({
              token: result.token.id,
              amount: $scope.amount
            });

            p.$save(
              function() {
                alert(
                  "Thank you for your purchase! You will receive a summary email shortly!"
                );
                $location.path("/");
              },
              function(err) {
                $scope.err = err;
              }
            );
          }
        });
      };
    }
]);
