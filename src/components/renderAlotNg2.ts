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
    this._count = Array.from(new Array(count || 0), (v, k) => k);
  }

  get count() {
    return this._count;
  }
}
