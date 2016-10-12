import * as angular from 'angular';

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute', 'ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';

    var routeConfig = {
      controller: 'TodoCtrl',
      template: require('./app.html'),
      resolve: {
        store: ['todoStorage', function (todoStorage) {
          // Get the correct module (API or localStorage).
          return todoStorage.then(function (module) {
            module.get(); // Fetch the todo records in the background.
            return module;
          });
        }]
      }
    };

    $routeProvider
      .when('/', routeConfig)
      .when('/:status', routeConfig)
      .otherwise({
        redirectTo: '/'
      });
  }]);
