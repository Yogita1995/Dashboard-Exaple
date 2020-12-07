import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ApplyLeaveComponent } from './modules/apply-leave/apply-leave.component';
import { ApproveAttendanceEditComponent } from './modules/approve-attendance-edit/approve-attendance-edit.component';
import { ApproveAttendanceListComponent } from './modules/approve-attendance-list/approve-attendance-list.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LeaveDetailsComponent } from './modules/leave-details/leave-details.component';
import { PostsComponent } from './modules/posts/posts.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path: 'posts',
      component:PostsComponent
    },
    {
      path:'aprrove-list',
      component:ApproveAttendanceListComponent
    },
    {
      path:'apply-leave',
      component:ApplyLeaveComponent
    },
    {
      path:'approve-edit/:id/:date/:type',
      component:ApproveAttendanceEditComponent
    },
    {
      path:'leave-details',
      component:LeaveDetailsComponent
    }


  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
