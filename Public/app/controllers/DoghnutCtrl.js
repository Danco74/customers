app.controller("DoughnutCtrl", function ($scope) {




    $scope.labels = ["Linux", "Windows"];
    $scope.data = [200, 500];
    $scope.options = {legend: {display: true}};
    // $scope.colors = [
    //     {
    //     backgroundColor: "rgba(255,1,0,0.2)",
    //     borderColor: "rgba(255,1,0,1)",
    //     pointBackgroundColor: "rgba(255,1,0,1)",
    //     pointBorderColor: "#fff",
    //     pointHoverBackgroundColor: "rgba(255,1,0,0.8)",
    //     pointHoverBorderColor: "rgba(255,1,0,1)"
    //   },
    //   {
    //     backgroundColor: "rgba(1,1,255,0.2)",
    //     borderColor: "rgba(1,1,255,1)",
    //     pointBackgroundColor: "rgba(1,1,255,1)",
    //     pointBorderColor: "#fff",
    //     pointHoverBackgroundColor: "rgba(1,1,255,0.8)",
    //     pointHoverBorderColor: "rgba(1,1,255,1)"      
    //   }];
});