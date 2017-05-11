/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LineTabComponent } from './line-tab.component';

describe('LineTabComponent', () => {
  let component: LineTabComponent;
  let fixture: ComponentFixture<LineTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
