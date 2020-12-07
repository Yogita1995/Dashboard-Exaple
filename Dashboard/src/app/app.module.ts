import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { SharedModule } from './shared/shared.module';
import { LeaveDetailsComponent } from './modules/leave-details/leave-details.component';




@NgModule({
  declarations: [
    AppComponent,
    LeaveDetailsComponent,
      
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    DefaultModule,
    SharedModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
