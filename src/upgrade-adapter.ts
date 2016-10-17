// Angular 2
import {UpgradeAdapter} from '@angular/upgrade';
import {NgModule, forwardRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RenderAlotComponent} from './components/renderAlotNg2';
import {FibonacciNg2} from './services/fibonacciNg2';

export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

@NgModule({
  declarations: [RenderAlotComponent],
  providers: [FibonacciNg2],
  imports: [
    BrowserModule,
  ]
})
export class AppModule {
}
