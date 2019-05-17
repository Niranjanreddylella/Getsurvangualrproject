import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfirmComponent } from './addfirm.component';

describe('AddfirmComponent', () => {
  let component: AddfirmComponent;
  let fixture: ComponentFixture<AddfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
