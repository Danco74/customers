var app = angular.module('customers-manager', ['ui.router','ui.grid','chart.js']);
app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'mainCtrl',
        templateUrl: '/templates/home.html'
      })
      .state('customer', {
        url: '/customer/:id',
        controller: 'customerCtrl',
        templateUrl: '/templates/customer.html',
        params: {
          customerParam: null
        }
        })
        .state('customer.general-info', {
          url: '/customer/general-info',
          controller: 'customerCtrl',
          templateUrl: '/templates/customer/general-info.html',
          params: {
            customerParam: null
          }
      })
      .state('customer.virtual-machines', {
        url: '/customer/virtual-machines',
        controller: 'customerCtrl',
        templateUrl: '/templates/customer/virtual-machines.html',
        params: {
          customerParam: null
          }
        })
        .state('add-customer', {
        url: '/add-customer',
        controller: 'addCustomerCtrl',
        templateUrl: '/templates/add-customer.html',
        params: {
          customerParam: null
        }
      }).state('add-customer.general-info', {
        url: '/add-customer/general-info',
        controller: 'addCustomerCtrl',
        templateUrl: '/templates/add-customer/general-info.html',
        params: {
          customerParam: null
        }
      }).state('add-customer.inventory', {
        url: '/add-customer/inventory',
        controller: 'addCustomerCtrl',
        templateUrl: '/templates/add-customer/inventory.html',
        params: {
          customerParam: null
        }
      })
  
    $urlRouterProvider.otherwise('/home');
  }]);
