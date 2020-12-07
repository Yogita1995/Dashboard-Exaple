import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CalendarDayViewBeforeRenderEvent, CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarMonthViewBeforeRenderEvent, CalendarMonthViewDay, CalendarView, CalendarWeekViewBeforeRenderEvent, DAYS_OF_WEEK } from 'angular-calendar';
import { addDays, addHours, endOfDay, endOfMonth, isSameDay, isSameMonth, startOfDay, subDays } from 'date-fns';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { HttpHeaders } from '@angular/common/http';
import { AllservicesService } from '../services/allservices.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { colors } from '../demo-utils/colors';
// import {colors} from '../'
import { WeekViewHour, WeekViewHourColumn } from 'calendar-utils';
import { color } from 'highcharts';
const colors: any = {
  red: { 
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  green: {
    primary: '#008000',
    secondary:'#00FF00'
  }
};


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
 

})
export class PostsComponent implements OnInit {
  data: any;
  date: any;
  monthlydata: any = [];
  text: any;
  exacttext: any;
  color: any;
  exactdata = [];
  exactdata1 = [];
  events: CalendarEvent[] = [];
  extactdate: any;


  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  // viewDate: any;

  // modalData: {
  //   action: string;
  //   event: CalendarEvent;
  // };


  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  activeDayIsOpen: boolean = true;

  constructor(private allservices: AllservicesService) { }
  ngOnInit(): void {
    this.getAddtence(this.viewDate);

  }
  getdate(viewdate) {

  }
  getAddtence(viewDate) {
    this.exactdata1 = [];
    const userDetails = {
      // "month": "Nov-2020",
      "month": (moment(viewDate).format('MMM-YYYY')).toString(),
      "id": "59"
    };
    console.log(userDetails)
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
              this.color = colors.green
              // this.color.cssClass = 'bg-pink';
            }
            else if (this.text == '0') {
              this.exacttext = "Absent"
              this.color = colors.red
            }
            else if (this.text == '0.5') {
              this.exacttext = "Half Day"
              this.color = colors.yellow
            }
            else if (this.text == 'holiday') {
              this.exacttext = "Holiday"
              this.color = colors.blue
            }
            this.exactdata = [
              {
                start: startOfDay(this.date),
                title: this.exacttext,
                color: this.color,

              },
            ]
            // this.exactdata = [
            //   {
            //     title: 'Event 1',
            //     color: colors.yellow,
            //     start: new Date(),
            //   },
            // ]
          }
          for (let index = 0; index < this.exactdata.length; index++) {
            const element = this.exactdata[index];
            this.exactdata1.push(element)
          }
          this.refresh.next();

        }
      }
    );
    this.events = this.exactdata1;
    console.log(this.events)
 


  }




  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    // this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  // addEvent(): void {
  //   this.events.push({
  //     title: 'New event',
  //     start: startOfDay(new Date()),
  //     end: endOfDay(new Date()),
  //     color: colors.red,
  //     draggable: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     }
  //   });
  //   this.refresh.next();
  // }




}
