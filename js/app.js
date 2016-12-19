angular.module('miniRouting', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('','/home');

  $stateProvider
    .state('home', {
      controller: 'homeCtrl',
      url: '/home',
      templateUrl: './js/home/home.html'
    })
    .state('products', {
      controller: 'productsCtrl',
      url: '/products/:id',
      templateUrl: './js/products/products.html'
    })
    .state('settings', {
      controller: 'settingsCtrl',
      url: '/settings',
      templateUrl: './js/settings/settings.html'
    })
})
