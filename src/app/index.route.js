(function() {
  'use strict';

  angular
    .module('storkcharts')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .state('mothers', {
          url: '/mothers',
          templateUrl: 'app/mothers/mothers.html',
          controller: 'MothersController',
          controllerAs: 'mothers'
      })
      .state('births', {
          url: '/births',
          templateUrl: 'app/births/births.html',
          controller: 'BirthsController',
          controllerAs: 'births'
      });
    $urlRouterProvider.otherwise('/');
  }

})();
