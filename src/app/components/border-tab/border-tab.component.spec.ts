/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BorderTabComponent } from './border-tab.component';

describe('BorderTabComponent', () => {
  let component: BorderTabComponent;
  let fixture: ComponentFixture<BorderTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
