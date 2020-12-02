import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
// import { MatCalenderModule } from '@angular/material/datepicker'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarModule } from 'primeng/calendar';
import { ApproveAttendanceListComponent } from 'src/app/modules/approve-attendance-list/approve-attendance-list.component';
import { ApplyLeaveComponent } from 'src/app/modules/apply-leave/apply-leave.component';
import { ApproveAttendanceEditComponent } from 'src/app/modules/approve-attendance-edit/approve-attendance-edit.component';
import { HttpClientModule } from '@angular/common/http';



FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ApproveAttendanceListComponent,
    ApplyLeaveComponent,
    ApproveAttendanceEditComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    // MatCalenderModule
    MatDatepickerModule,
    MatFormFieldModule,
    FullCalendarModule,
    CalendarModule,
    HttpClientModule



  ]
})
export class DefaultModule { }
