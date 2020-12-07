import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AllservicesService } from '../services/allservices.service';

@Component({
  selector: 'app-approve-attendance-list',
  templateUrl: './approve-attendance-list.component.html',
  styleUrls: ['./approve-attendance-list.component.scss']
})
export class ApproveAttendanceListComponent implements OnInit {
  currentdate: any;
  data: any;
  allleavesdata:any=[];
  upcommingleaves:any=[];
  date: string;
  value: any;
  upcommingleavesall:any=[];
  upcommingleavesallfinal:any=[];

  constructor(private allservice:AllservicesService) { }

  ngOnInit(): void {
    this.getupcomingleaves();
  }
  getupcomingleaves(){
    this.currentdate = new Date();
    const userDetails = {
      "year": (moment(this.currentdate).format('YYYY')).toString(),
     
    };
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    this.allservice.getUpcomingLeaves(userDetails,config).subscribe(
      (x:any)=>{
        this.data = x.body;
        let obj = JSON.parse(this.data);   
        this.allleavesdata=obj.data
        // console.log(this.allleavesdata)
        for (let index = 0; index < this.allleavesdata.length; index++) {
          const element = this.allleavesdata[index];
          this.upcommingleaves=element.upcoming_leave
          console.log(this.upcommingleaves)

          if(this.upcommingleaves){
            for (let object of this.upcommingleaves) {
              for (let key in object) {
                this.date = key
                this.value = object[key]
              }
              this.upcommingleavesall = [
                { date: this.date, value: this.value },
              ]
              for (let index = 0; index < this.upcommingleavesall.length; index++) {
                const element = this.upcommingleavesall[index];
                this.upcommingleavesallfinal.push(element)
              }
            }
          }  
        }
        // this.upcommingleaves= this.allleavesdata.upcoming_leave
        // console.log(this.upcommingleaves)
      }
    );
  }
}
