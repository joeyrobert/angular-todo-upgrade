import { Injectable } from '@angular/core';

@Injectable()
export class FibonacciNg2 {
  firstN(n) {
    var sequence = [1, 1];

    for (var i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence.slice(0, n);
  }

  valueAt(n) {
    return this.firstN(n)[n - 1];
  }
}
