import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbListItemComponent } from './climb-list-item.component';

describe('ClimbListItemComponent', () => {
  let component: ClimbListItemComponent;
  let fixture: ComponentFixture<ClimbListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
