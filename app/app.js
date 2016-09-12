'use strict';

let app = angular.module('MyApp', ['ngRoute']);

app.config(($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/flowers.html',
      controller: 'FlowerCtrl',
      resolve: {
        arrangements: function(FirebaseFactory) {
          return FirebaseFactory.getArrangements();
        }
      }
    })
    .otherwise('/');
});
