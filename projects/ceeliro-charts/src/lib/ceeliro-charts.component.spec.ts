import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeliroChartsComponent } from './ceeliro-charts.component';

describe('CeeliroChartsComponent', () => {
  let component: CeeliroChartsComponent;
  let fixture: ComponentFixture<CeeliroChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeeliroChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeliroChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
