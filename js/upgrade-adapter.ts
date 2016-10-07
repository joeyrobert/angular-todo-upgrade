// Angular 2
import {UpgradeAdapter} from '@angular/upgrade';
import {AppModule} from './app.module';
import {enableProdMode} from '@angular/core';

export const upgradeAdapter = new UpgradeAdapter(AppModule);
enableProdMode();
