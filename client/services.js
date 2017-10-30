angular
  .module("store.services", [])
  .service("SEOService", [
    "$rootScope",
    function($rootScope) {
      this.setSEO = function(data) {
        $rootScope.seo = {};
        for (var p in data) {
          $rootScope.seo[p] = data[p];
        }
      };
    }
  ])
  .service("CartService", [
    function() {
      this.getCart = function() {
        if (localStorage.getItem("cart") === null) {
          localStorage.setItem("cart", JSON.stringify([]));
        }
        console.log(localStorage.getItem("cart"));
        return JSON.parse(localStorage.getItem("cart"));
      };
      this.addItem = function(item) {
        let list = this.getCart();
        let index = indexOf(item, list);
        if (index == -1) {
          item.quantity = 1;
          list.push(item);
        } else {
          list[index].quantity = list[index].quantity + 1;
        }
        // console.log(list)
        localStorage.setItem("cart", JSON.stringify(list));
        // console.log(localStorage.setItem("cart", JSON.stringify(list)));
      };
      function indexOf(item, list) {
        for (let i = 0; i < list.length; i++) {
          if (list[i].id === item.id) {
            return i;
          }
        }
        return -1;
      }
      this.removeItem = function() {
        //
      };
    }
  ]);
