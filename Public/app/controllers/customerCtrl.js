app.controller('customerCtrl', function($scope,$state,$stateParams,customersFactory) {

    

    $scope.isActive = function(state) {
        $scope.state = $state.current.name;
        return (state === $scope.state);
    };

    if (!$stateParams.customerParam) {
        customersFactory.getCustomer($stateParams.id)
          .then(function(customer) {
            $scope.customer = customer;
            
          })
      } else {
        $scope.customer = $stateParams.customerParam;
      };
      
  });

  