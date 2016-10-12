import * as angular from 'angular';

export class RenderAlotComponent {
  public text;
  private _count = [];

  set count(count) {
    // var countArr = [];
    // for (var i = 0; i < count; i++) {
    //   countArr.push(true);
    // }
    // this._count = countArr;
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
