import {RenderAlotComponent} from './components/renderAlotNg2';
import {upgradeAdapter} from './upgrade-adapter';

angular.module('todomvc').directive('renderAlotNg2', upgradeAdapter.downgradeNg2Component(RenderAlotComponent));
