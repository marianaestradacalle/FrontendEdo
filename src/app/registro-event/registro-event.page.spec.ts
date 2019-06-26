import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEventPage } from './registro-event.page';

describe('RegistroEventPage', () => {
  let component: RegistroEventPage;
  let fixture: ComponentFixture<RegistroEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
