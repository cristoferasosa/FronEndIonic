import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcreditsPage } from './listcredits.page';

describe('ListcreditsPage', () => {
  let component: ListcreditsPage;
  let fixture: ComponentFixture<ListcreditsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcreditsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcreditsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
