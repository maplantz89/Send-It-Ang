import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbByAttemptComponent } from './climb-by-attempt.component';

describe('ClimbByAttemptComponent', () => {
  let component: ClimbByAttemptComponent;
  let fixture: ComponentFixture<ClimbByAttemptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbByAttemptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbByAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
