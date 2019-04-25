import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeliroCommonComponent } from './ceeliro-common.component';

describe('CeeliroCommonComponent', () => {
  let component: CeeliroCommonComponent;
  let fixture: ComponentFixture<CeeliroCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeeliroCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeliroCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
