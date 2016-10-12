import {Component} from '@angular/core';

@Component({
  selector: 'render-alot-ng2',
  template: require('./render-alot-ng2.html'),
  inputs: ['text', 'count']
})
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
