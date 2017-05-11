/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextTabComponent } from './text-tab.component';

describe('TextTabComponent', () => {
  let component: TextTabComponent;
  let fixture: ComponentFixture<TextTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
