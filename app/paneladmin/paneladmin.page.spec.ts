import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneladminPage } from './paneladmin.page';

describe('PaneladminPage', () => {
  let component: PaneladminPage;
  let fixture: ComponentFixture<PaneladminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaneladminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneladminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
