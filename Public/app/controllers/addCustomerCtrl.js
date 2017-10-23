app.controller('addCustomerCtrl', function($scope,$stateParams,customersFactory) {

        $scope.saved = false;
        $scope.saveCustomer = function() {

        var vmsArr = [];

        for (var vm in $scope.vms){
            vmsArr.push($scope.vms[vm]);
        }

            var newCustomer = {
                name: $scope.name,
                address: $scope.address,
                description: $scope.description,
                logo_url: $scope.logo_url,
                vms: vmsArr
            }

            customersFactory.addCustomer(newCustomer).then(function (customer) {
                $scope.saved = true;
             }).catch(function(error) {
                 console.log(error)
              });
        };


        

       
          
      });