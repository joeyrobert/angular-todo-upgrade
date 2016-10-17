import * as angular from 'angular';

export class RenderAlotComponent {
  public text;
  public countArr = [];

  set count(count) {
    this.countArr = Array.from(new Array(count || 0), (v, k) => k);
  }

  get count() {
    return this.countArr.length;
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
