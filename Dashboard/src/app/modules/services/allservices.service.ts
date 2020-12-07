import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AllservicesService {
  public attandancedetail:string="http://13.234.200.96:6600/monthly_attendance_details";
  public leavedetails:string=" http://13.234.200.96:6600/leaves_details";
  public applyleave:string="http://13.234.200.96:6600/leave_confirmation";
  public confirmleave:string="http://13.234.200.96:6600/leave_apply";
  public upcomingleave:string="http://13.234.200.96:6600/listing_upcoming_leaves";
  public approveleave:string="http://13.234.200.96:6600/leave_approval";
  constructor(private http: HttpClient) { }

  attendaceDetails(data,config){
    return this.http.post(this.attandancedetail,data, config).pipe(map(result => {
      return result;
    }));

  }
  getLeaveDetails(data,config){
    return this.http.post(this.leavedetails,data, config).pipe(map(result => {
      return result;
    }));
  }

  applyleavedetail(data,config){
    return this.http.post(this.applyleave,data, config).pipe(map(result => {
      return result;
    }));
  }
  confirmLeavedetail(data,config){
    return this.http.post(this.confirmleave,data, config).pipe(map(result => {
      return result;
    }));
  }
  getUpcomingLeaves(data,config){
    return this.http.post(this.upcomingleave,data, config).pipe(map(result => {
      return result;
    }));
  }
  approveLeave(data,config){
    return this.http.post(this.approveleave,data, config).pipe(map(result => {
      return result;
    }));
  }
}
