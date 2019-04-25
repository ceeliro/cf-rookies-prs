import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeliroOauthComponent } from './ceeliro-oauth.component';

describe('CeeliroOauthComponent', () => {
  let component: CeeliroOauthComponent;
  let fixture: ComponentFixture<CeeliroOauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeeliroOauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeliroOauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
