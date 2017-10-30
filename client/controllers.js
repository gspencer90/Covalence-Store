angular
  .module("store.controllers", ["ngRoute"])

  .controller("WelcomeController", ["SEOService", "$location", function(SEOService, $location) {

    SEOService.setSEO({
      title: 'Covalence Store',
      description: 'Welcome to the Covalence Store!',
      url: $location.url()

  });

  }])

  .controller("ApparelController", [
    "$scope",
    "$location",
    "$resource",
    "Apparel",
    "Product",
    "CartService",
    "SEOService",
    function($scope, $location, $resource, Apparel, Product, CartService, SEOService) {
      $scope.apparel = Apparel.query();
      $scope.addToCart = function() {
        // cache item to be added
      };

      SEOService.setSEO({
        title: 'Covalence || Apparel',
        description: 'Give your wardrobe an upgrade!',
        url: $location.url()
  
    });
    }
  ])
  .controller("SingleController", [
    "$scope",
    "Product",
    "$routeParams",
    "CartService",
    function($scope, Product, $routeParams, CartService) {
      $scope.product = Product.get({
        id: $routeParams.id
      });
      $scope.addToCart = function() {
        CartService.addItem($scope.product);
        alert('Your item has been added to the shopping cart!');
      };
    }
  ])
  .controller("MiscController", [
    "$scope",
    "Misc",
    "Product",
    "$routeParams",
    "$location",
    "SEOService",
    function($scope, Misc, Product, $routeParams, $location, SEOService) {
      $scope.misc = Misc.query();

      SEOService.setSEO({
        title: 'Covalence || Misc',
        description: "Stuff you didn't even know you needed",
        url: $location.url()
  
    });
    }
  ])

  .controller("ContactController", [
    "$scope",
    "ContactForm",
    "SEOService",
    function($scope, ContactForm, SEOService) {
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

      SEOService.setSEO({
        title: 'Covalence || Contact',
        description: "Let's keep in touch!",
        url: $location.url()
  
    });
    }
  ])

  .controller("CartController", [
    "$scope",
    "$location",
    "CartService", 
    "Purchase",
    "SEOService",
    function($scope, $location, CartService, Purchase, SEOService) {
      if (localStorage.getItem("cart" === '')) {
        console.log("No items in cart")
      } else {
        $scope.items = JSON.parse(localStorage.getItem("cart"));
        console.log($scope.items);
      }

      let elements = stripe.elements();
      let card = elements.create("card", {
        style: {
          base: {
            iconColor: "#666EE8",
            color: "#31325F",
            lineHeight: "25px",
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

      SEOService.setSEO({
        title: 'Covalence || Cart',
        description: 'Enjoy your purchase!',
        url: $location.url()
  
    });
    }
]);
