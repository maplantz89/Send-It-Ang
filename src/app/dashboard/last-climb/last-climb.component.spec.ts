import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastClimbComponent } from './last-climb.component';

describe('LastClimbComponent', () => {
  let component: LastClimbComponent;
  let fixture: ComponentFixture<LastClimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastClimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastClimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
