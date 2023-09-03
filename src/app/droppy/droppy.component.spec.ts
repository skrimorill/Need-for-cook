/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DroppyComponent } from './droppy.component';

describe('DroppyComponent', () => {
  let component: DroppyComponent;
  let fixture: ComponentFixture<DroppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
