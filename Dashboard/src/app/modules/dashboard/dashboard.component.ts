import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Calendar } from '@fullcalendar/core'; 
// import { CalendarOptions } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  date: any;
  
  
  
  
  constructor() { 
    const name = Calendar.name;
  }

  ngOnInit(): void {
    this.date = new Date();
  }
  // calendarPlugins = [dayGridPlugin];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-06-27' },
      { title: 'event 2', date: '2020-06-30' }
    ]
  };
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}
