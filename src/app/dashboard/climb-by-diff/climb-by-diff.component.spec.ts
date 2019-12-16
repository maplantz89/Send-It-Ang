import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbByDiffComponent } from './climb-by-diff.component';

describe('ClimbByDiffComponent', () => {
  let component: ClimbByDiffComponent;
  let fixture: ComponentFixture<ClimbByDiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbByDiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbByDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
