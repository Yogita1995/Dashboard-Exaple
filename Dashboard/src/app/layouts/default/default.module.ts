import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApproveAttendanceListComponent } from 'src/app/modules/approve-attendance-list/approve-attendance-list.component';
import { ApplyLeaveComponent } from 'src/app/modules/apply-leave/apply-leave.component';
import { ApproveAttendanceEditComponent } from 'src/app/modules/approve-attendance-edit/approve-attendance-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SchedulerModule } from 'angular-calendar-scheduler';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



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
    MatDatepickerModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' }),
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    


  ]
})
export class DefaultModule { }
