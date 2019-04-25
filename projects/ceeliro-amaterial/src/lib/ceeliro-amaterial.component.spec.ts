import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeliroAmaterialComponent } from './ceeliro-amaterial.component';

describe('CeeliroAmaterialComponent', () => {
  let component: CeeliroAmaterialComponent;
  let fixture: ComponentFixture<CeeliroAmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeeliroAmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeliroAmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
