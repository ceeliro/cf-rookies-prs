import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeliroFormsComponent } from './ceeliro-forms.component';

describe('CeeliroFormsComponent', () => {
  let component: CeeliroFormsComponent;
  let fixture: ComponentFixture<CeeliroFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeeliroFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeliroFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
