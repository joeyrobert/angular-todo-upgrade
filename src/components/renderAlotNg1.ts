import * as angular from 'angular';

export class RenderAlotComponent {
  public text;
  private _count = [];

  set count(count) {
    this._count = Array.from(new Array(count || 0), (v, k) => k);
  }

  get count() {
    return this._count;
  }
}

angular.module('todomvc')
  .component('renderAlotNg1', {
    template: require('./render-alot-ng1.html'),
    bindings: {
      text: '<',
      count: '<'
    },
    controller: RenderAlotComponent
  });
