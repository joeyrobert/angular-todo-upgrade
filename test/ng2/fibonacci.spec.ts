import {Component} from '@angular/core';
import {inject, TestBed, ComponentFixtureAutoDetect} from '@angular/core/testing';
import {AppModule} from '../../src/upgrade-adapter';
import {FibonacciNg2} from '../../src/services/fibonacciNg2';

describe('Fibonacci', () => {
  beforeEach(() => {
    // As far as I can tell, it is not possible to use UpgradeAdapter
    // directly with TestBed.configureTestingModule.
    // Use imports with the main app module instead.
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
  });

  it('should generate first 10 in sequence', inject([FibonacciNg2, 'FibonacciNg1'], (fibonacciNg2: FibonacciNg2, fibonacciNg1) => {
    expect(fibonacciNg2.firstN(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    console.log(fibonacciNg1);
  }));
});
