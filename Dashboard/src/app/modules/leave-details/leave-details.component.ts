import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AllservicesService } from '../services/allservices.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.scss']
})
export class LeaveDetailsComponent implements OnInit {
  currentdate: any;
  data: any;
  leavedetail: any = [];
  leave_balance: any;
  leavetaken: any = [];
  date: string;
  value: any;
  leavetakenfinal: any = [];
  leaveappply: any = [];
  leaveappplyfinal: any = [];
  leave_rejected: any = [];
  leave_rejected_final: any = [];
  year: any;
  yearly_leave:any;

  constructor(private allServices: AllservicesService) { }

  ngOnInit(): void {
    this.getLeavedetails();
  }

  getLeavedetails() {
    this.currentdate = new Date();
    const userDetails = {
      // "month": "Nov-2020",
      "year": (moment(this.currentdate).format('YYYY')).toString(),
      "id": "59"
    };
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    this.allServices.getLeaveDetails(userDetails, config).subscribe(
      (x: any) => {
        this.data = x.body;
        let obj = JSON.parse(this.data);       
        this.leave_balance = obj.leave_balance;
        this.yearly_leave=obj.yearly_leave;
        this.year = obj.year;
        let leavetaken = obj.leave_taken;
        if(leavetaken){
          for (let object of leavetaken) {
            for (let key in object) {
              this.date = key
              this.value = object[key]
            }
            this.leavetaken = [
              { date: this.date, value: this.value },
            ]
            for (let index = 0; index < this.leavetaken.length; index++) {
              const element = this.leavetaken[index];
              this.leavetakenfinal.push(element)
            }
          }
        }       
        let leaveapply = obj.leaves_apply
        if(leaveapply){
          for (let object of leaveapply) {
            for (let key in object) {
              this.date = key
              this.value = object[key]
            }
            this.leaveappply = [
              { date: this.date, value: this.value },
            ]
            for (let index = 0; index < this.leaveappply.length; index++) {
              const element = this.leaveappply[index];
              this.leaveappplyfinal.push(element)
            }
          }
        }     
        let leaverejected = obj.leaves_rejected
        if(leaverejected){
          for (let object of leaverejected) {
            for (let key in object) {
              this.date = key
              this.value = object[key]
            }
            this.leave_rejected = [
              { date: this.date, value: this.value },
            ]
            for (let index = 0; index < this.leave_rejected.length; index++) {
              const element = this.leave_rejected[index];
              this.leave_rejected_final.push(element)
            }
          }
        }    
      }
    );
  }
  OnSearch(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];     
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

}
