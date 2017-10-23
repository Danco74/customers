app.controller('mainCtrl', function($scope,$stateParams,customersFactory) {
    
    var customers = [];
    
    
        customersFactory.getCustomers().then(function (customers) {
            $scope.customers = customers;
        }).catch(function (error) {
            console.log(error)
        });
           });