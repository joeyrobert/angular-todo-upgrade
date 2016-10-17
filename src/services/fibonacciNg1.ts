import * as angular from 'angular';

export class FibonacciNg1 {
  private memo = {};

  firstN(n) {
    var sequence = [];
    for (var i = 0; i < n; i++) {
      sequence.push(this.valueAt(i));
    }
    return sequence;
  }

  valueAt(n) {
    if (n <= 1) {
      return 1;
    }

    if (this.memo[n]) {
      return this.memo[n];
    }

    const value = this.valueAt(n - 1) + this.valueAt(n - 2);
    this.memo[n] = value;
    return value;
  }
}

angular.module('todomvc').service('FibonacciNg1', FibonacciNg1);
