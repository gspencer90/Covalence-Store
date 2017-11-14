angular
  .module("store.factories", [])
  .factory("Product", [
    "$resource",
    function($resource) {
      // assume on the backend there is a GET request handler for
      // /api/products/category/:categoryid
      // reads as "Get all products having this category id"
      return $resource(
        "/api/products/:id",
        {
          id: "@id"
        },
        {
          queryByCategory: {
            method: "GET",
            url: "/api/products/category/:categoryid",
            isArray: true
		  },
		  queryByAnimal: {
			  method: "GET",
			  url: "/api/animals/category/:categoryid",
			  isArray: true
		  }
        }
      );
    }
  ])
  .factory("Misc", [
    "$resource",
    function($resource) {
      return $resource("/api/misc", {
        id: "@id"
      });
    }
  ])
  .factory("Category", [
    "$resource",
    function($resource) {
      return $resource("/api/categories/:id", {
        id: "@id"
      });
    }
  ])
  .factory("ContactForm", [
    "$resource",
    function($resource) {
      return $resource("/api/contactforms/:id", { id: "@id" });
    }
  ])
  // .factory('Category', ['$resource', function($resource){
  // 	return $resource('/api/categories/:id', {
  // 		id: '@id'
  // 	})
  // }])

  .factory("Purchase", [
    "$resource",
    function($resource) {
      return $resource("/api/purchases/:id", {
        id: "@id"
      });
    }
  ])
  .factory("Apparel", [
    "$resource",
    function($resource) {
      return $resource("/api/apparel");
    }
  ]);
