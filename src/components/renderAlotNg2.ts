import {Component, Inject} from '@angular/core';
import {FibonacciNg2} from '../services/fibonacciNg2';
import {FibonacciNg1} from '../services/fibonacciNg1';

@Component({
  selector: 'render-alot-ng2',
  template: require('./render-alot-ng2.html'),
  inputs: ['text', 'count']
})
export class RenderAlotComponent {
  public text;
  public countArr = [];
  public ng2Sequence = [];
  public ng1Sequence = [];

  constructor(private fibonacciNg2: FibonacciNg2, @Inject('FibonacciNg1') private fibonacciNg1: FibonacciNg1) {
  }

  set count(count) {
    this.countArr = Array.from(new Array(count || 0), (v, k) => k);
    this.ng2Sequence = this.fibonacciNg2.firstN(count);
    this.ng1Sequence = this.fibonacciNg1.firstN(count);
  }

  get count() {
    return this.countArr.length;
  }
}
