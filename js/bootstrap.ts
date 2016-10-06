import 'node_modules/angular/angular.js';
import 'node_modules/angular-route/angular-route.js';
import 'node_modules/angular-resource/angular-resource.js';
import './app';
import './controllers/todoCtrl';
import './components/renderAlotNg1';
import './components/renderAlotNg2';
import './services/todoStorage';
import './directives/todoFocus';
import './directives/todoEscape';
import {upgradeAdapter} from './upgrade-adapter';

upgradeAdapter.bootstrap(document.body, ['todomvc']);
import './upgraded-components';

// Angular 1
// angular.bootstrap(document.body, ['todomvc']);
