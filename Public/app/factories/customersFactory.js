app.factory('customersFactory', function($http) {
    var customersFactory = {};
  
    customersFactory.getCustomers = function() {
        return $http.get('/customers')
        .then(function(response) {
          return angular.copy(response.data);
        });
      };

    customersFactory.getCustomer = function(id) {
        return $http.get('/customers/' + id)
          .then(function(response) {
            return response.data
          }, function(err) {
            console.error(err)
          });
      };

    customersFactory.addCustomer = function(newCustomer) {
        return $http.post('/customers',newCustomer)
        .then(function(response) {
          return angular.copy(response.data);
        });
      };



      return customersFactory;
});