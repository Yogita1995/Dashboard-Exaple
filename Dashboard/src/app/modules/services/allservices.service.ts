import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AllservicesService {
  public baseurl:string="http://13.234.200.96:6600/monthly_attendance_details";

  constructor(private http: HttpClient) { }

  attendaceDetails(data,config){
    return this.http.post(this.baseurl,data, config).pipe(map(result => {
      return result;
    }));

  }
}
