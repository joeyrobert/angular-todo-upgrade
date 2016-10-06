/*global angular */

export class RenderAlotComponent {
  public text;
  private _count = [];

  set count(count) {
    this._count = Array.from({length: count}, (v, k) => k);
  }

  get count() {
    return this._count;
  }
}

angular.module('todomvc')
  .component('renderAlotNg1', {
    templateUrl: '/js/components/render-alot-ng1.html',
    bindings: {
      text: '<',
      count: '<'
    },
    controller: RenderAlotComponent
  });
