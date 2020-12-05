import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Calendar } from '@fullcalendar/core';
// import { CalendarOptions } from '@fullcalendar/angular';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { $ } from 'protractor';
import { AllservicesService } from '../services/allservices.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('ucCalendar') calendarComponent: FullCalendarComponent;
  @Input() header: { [key: string]: any }

  date: any;
  currentdate: any;
  data: any;
  text: any;
  name: any;
  showModal: boolean;
  calendarOptions: CalendarOptions;
  monthlydata: any = [];
  title: string;
  exactdata = [];
  exactdata1 = [];
  exacttext: any;
  exactdate: any;
  color: any;
  finaltext: any;
  finaldata: any = [];
  headeroptions: any;


  constructor(private allservices: AllservicesService, private http: HttpClient) {
    const name = Calendar.name;

  }

  ngOnInit(): void {
    this.currentdate = new Date();
    let dateoriginal=(moment(this.currentdate).format('MMM-YYYY')).toString()

    const userDetails = {
      // "month": "Nov-2020",
      "month": (moment(this.currentdate).format('MMM-YYYY')).toString(),
      "id": "59"
    };

    

    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    this.allservices.attendaceDetails(userDetails, config).subscribe(
      (x: any) => {
        this.data = x.body
        let obj = JSON.parse(this.data);
        this.date = obj.month
        this.monthlydata = obj.Monthly_data
        for (let object of this.monthlydata) {
          for (let key in object) {
            this.date = key
            this.text = object[key]

            if (this.text == '1') {
              this.exacttext = "Present"
              this.color = "green"
            }
            else if (this.text == '0') {
              this.exacttext = "Absent"
              this.color = "red"
            }
            else if (this.text == '0.5') {
              this.exacttext = "Half Day"
              this.color = "blue"
            }
            else if (this.text == 'holiday') {
              this.exacttext = "Holiday"
              this.color = "black"
            }
            this.exactdata = [
              { title: this.exacttext, date: this.date, color: this.color },
            ]
          }
          for (let index = 0; index < this.exactdata.length; index++) {
            const element = this.exactdata[index];
            this.exactdata1.push(element)
          }
        }
        setTimeout(() => {
          this.calendarOptions = {
            initialView: 'dayGridMonth',
            dateClick: this.handleDateClick.bind(this),
            events: this.exactdata1,
            headerToolbar: {
              left:"BackwardButton,ForwardButton",
              center:"title"
            },
            customButtons:{
              ForwardButton:{
                icon:"right-single-arrow",
                click:function(){}
              },
              BackwardButton:{
                icon:"left-single-arrow",
                click:function(){}
              }

            }
          };
        }, 500);
      }
    ); 

    
    // if (changes.header?.currentValue) {
    //   this.calendarOptions.headerToolbar = changes.header?.currentValue
    // }
  //   var date1 = this.header.fullCalendar('prev').fullCalendar( 'getDate' );
  //  console.log(date1)
  // const slides = document.getElementsByClassName('fc-prev-button');

  // document.getElementById("fc-prev-button").addEventListener("click", loadNewEvents());
  // console.log(slides)

  // const slides = document.getElementsByClassName('fc-toolbar-title').namedItem
  // console.log(slides)

  // var slides = <HTMLElement[]<any>document.getElementsByClassName('fc-prev-button');



  }
  
  handleDateClick(arg) {
    // this.showModal = true;
    this.exactdate = arg.dateStr
    console.log(this.exactdate)
  }
  getdate(arg) {
    let date = ((<HTMLInputElement>document.getElementById("getdate")).value =  arg.dateStr)
    console.log(date)
  }
  hide() {
    this.showModal = false;
  }
  // ondate(){
  //   var year
  //   var month
  //   $('ucCalendar').fullCalendar({
  //     alert("strat")
  //   })
  // }



}
