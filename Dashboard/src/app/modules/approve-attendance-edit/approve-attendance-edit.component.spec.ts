import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveAttendanceEditComponent } from './approve-attendance-edit.component';

describe('ApproveAttendanceEditComponent', () => {
  let component: ApproveAttendanceEditComponent;
  let fixture: ComponentFixture<ApproveAttendanceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveAttendanceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveAttendanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
