import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapePagePage } from './landscape-page.page';

describe('LandscapePagePage', () => {
  let component: LandscapePagePage;
  let fixture: ComponentFixture<LandscapePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandscapePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
