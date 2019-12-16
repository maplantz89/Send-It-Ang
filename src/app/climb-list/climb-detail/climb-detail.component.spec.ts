import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbDetailComponent } from './climb-detail.component';

describe('ClimbDetailComponent', () => {
  let component: ClimbDetailComponent;
  let fixture: ComponentFixture<ClimbDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
