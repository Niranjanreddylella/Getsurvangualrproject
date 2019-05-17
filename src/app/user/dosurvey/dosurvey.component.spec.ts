import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosurveyComponent } from './dosurvey.component';

describe('DosurveyComponent', () => {
  let component: DosurveyComponent;
  let fixture: ComponentFixture<DosurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
