import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestSentComponent } from './highest-sent.component';

describe('HighestSentComponent', () => {
  let component: HighestSentComponent;
  let fixture: ComponentFixture<HighestSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighestSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
