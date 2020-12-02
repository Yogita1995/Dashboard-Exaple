import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveAttendanceListComponent } from './approve-attendance-list.component';

describe('ApproveAttendanceListComponent', () => {
  let component: ApproveAttendanceListComponent;
  let fixture: ComponentFixture<ApproveAttendanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveAttendanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveAttendanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
