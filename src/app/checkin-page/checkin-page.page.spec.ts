import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinPagePage } from './checkin-page.page';

describe('CheckinPagePage', () => {
  let component: CheckinPagePage;
  let fixture: ComponentFixture<CheckinPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
