import * as angular from 'angular';
import {RenderAlotComponent} from './components/renderAlotNg2';
import {FibonacciNg2} from './services/fibonacciNg2';
import {upgradeAdapter} from './upgrade-adapter';

angular.module('todomvc')
  // Typings expects <angular.IDirectiveFactory>, not Function, so cast it.
  .directive('renderAlotNg2', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(RenderAlotComponent))
  .service('FibonacciNg2', upgradeAdapter.downgradeNg2Provider(FibonacciNg2));
