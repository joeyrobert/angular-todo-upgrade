import 'node_modules/angular/angular.js';
import 'node_modules/angular-route/angular-route.js';
import 'node_modules/angular-resource/angular-resource.js';
import './app';
import './controllers/todoCtrl';
import './services/todoStorage';
import './directives/todoFocus';
import './directives/todoEscape';

import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './app.module';

export const upgradeAdapter = new UpgradeAdapter(AppModule);

upgradeAdapter.bootstrap(document.body, ['todomvc']);