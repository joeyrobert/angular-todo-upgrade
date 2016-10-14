import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'angular/angular.js';
import 'angular-route/angular-route.js';
import 'angular-resource/angular-resource.js';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import './app';
import './controllers/todoCtrl';
import './components/renderAlotNg1';
import './components/renderAlotNg2';
import './services/todoStorage';
import './directives/todoFocus';
import './directives/todoEscape';
import {upgradeAdapter} from './upgrade-adapter';

upgradeAdapter.bootstrap(document.body, ['todomvc']);
