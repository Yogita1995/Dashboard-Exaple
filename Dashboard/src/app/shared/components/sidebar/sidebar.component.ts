import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() toggleSideBarForMe :EventEmitter<any> =new EventEmitter();
  showsidebar:boolean=true;


  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.showsidebar=false;
  }
 
}
