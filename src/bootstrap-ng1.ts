import * as angular from 'angular';
import 'angular-route/angular-route.js';
import 'angular-resource/angular-resource.js';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import './app';
import './controllers/todoCtrl';
import './components/renderAlotNg1';
import './directives/todoFocus';
import './directives/todoEscape';
import './services/todoStorage';
import './services/fibonacciNg1';

// Angular 1
angular.bootstrap(document.body, ['todomvc']);
