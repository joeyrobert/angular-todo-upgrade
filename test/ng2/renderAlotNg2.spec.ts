import { Component } from '@angular/core';
import { inject, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RenderAlotComponent } from '../../src/components/renderAlotNg2';

describe('Render Alot', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [RenderAlotComponent],
    providers: [
      RenderAlotComponent,
      { provide: ComponentFixtureAutoDetect, useValue: true }
    ]
  }));

  it('should create array of length count', inject([RenderAlotComponent], (renderAlot: RenderAlotComponent) => {
    renderAlot.count = 100;
    expect(renderAlot.countArr.length).toEqual(100);
  }));
});
