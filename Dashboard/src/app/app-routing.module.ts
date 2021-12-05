import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';



const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      // {
      //   path: '',
      //   component: DashboardComponent
      // },
      // {
      //   path: 'posts',
      //   component: PostsComponent
      // },
      // {
      //   path: 'aprrove-list',
      //   component: ApproveAttendanceListComponent
      // },
      // {
      //   path: 'apply-leave',
      //   component: ApplyLeaveComponent
      // },
      // {
      //   path: 'approve-edit/:id/:date/:type',
      //   component: ApproveAttendanceEditComponent
      // },
      // {
      //   path: 'leave-details',
      //   component: LeaveDetailsComponent
      // }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
