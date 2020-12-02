import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Calendar } from '@fullcalendar/core';
// import { CalendarOptions } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/angular';
import { $ } from 'protractor';
import { AllservicesService } from '../services/allservices.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  date: any;
  data: any = [];
  text: any;
  name: any;
  showModal: boolean;
  calendarOptions: CalendarOptions;




  constructor(private allservices: AllservicesService, private http: HttpClient) {
    const name = Calendar.name;
  }

  ngOnInit(): void {
    this.date = new Date();
    const userDetails = {
      "month": "Nov-2020", "id": "59"
    };
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    this.allservices.attendaceDetails(userDetails, config).subscribe(
      (x: any) => {
        this.data = x
      }
    );

    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick.bind(this), // bind is important!
        events: [
          this.data
        ]
      };
    }, 500);
  }
  // calendarPlugins = [dayGridPlugin];

  // calendarOptions: CalendarOptions = {

  //   initialView: 'dayGridMonth',
  //   dateClick: this.handleDateClick.bind(this), // bind is important!
  //   events: [
  //     { title: 'Half Day', date: '2020-12-01',color:'red'},
  //     { title: 'Absent', date: '2020-12-19',color:'blue'},
  //     { title: "Present", date: '2020-12-08',color:'green'}
  //     this.data


  //   ]
  // };
  eventClick(model: any) {
    this.name = model.event.title;
    this.date = model.event.date;
    this.showModal = true;
    console.log("start")
  }
  handleDateClick(arg) {

    this.showModal = true;

  }
  hide() {
    this.showModal = false;
  }

}
