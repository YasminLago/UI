/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PointTabComponent } from './point-tab.component';

describe('PointTabComponent', () => {
  let component: PointTabComponent;
  let fixture: ComponentFixture<PointTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
