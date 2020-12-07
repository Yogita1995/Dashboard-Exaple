import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import Swal from 'sweetalert2';
import { AllservicesService } from '../services/allservices.service';


@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent implements OnInit {
  type: SelectItem[];
  form: FormGroup;
  data: any;
  msg: any;
  dates: any = [];
  id: any;
  type1: any;

  constructor(private formBuilder: FormBuilder, private allservices: AllservicesService) {
    this.type = [{ label: 'Full Day', value: '1' },
    { label: 'Half Day', value: '0.5' },
    ];
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
      // date: new FormControl('', [Validators.required]),
      from_date: new FormControl('', [Validators.required]),
      to_date: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),

    })
  }

  onSubmit() {
    let formdata = this.form.value
    let fromdate = formdata.from_date
    let todate = formdata.to_date
    this.type1 = formdata.type
    this.id = formdata.id
    const data =
    {
      "id": this.id,
      "from_date": (moment(fromdate).format('DD-MM-YYYY')).toString(),
      "to_date": (moment(todate).format('DD-MM-YYYY')).toString(),
      "type": this.type1
    }
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    this.allservices.applyleavedetail(data, config).subscribe(
      (x: any) => {
        this.data = x.body
        let obj = JSON.parse(this.data);
        this.msg = obj.data
        this.dates = obj.dates



        this.openconfirmationmodal()
      }
    );

  }
  openconfirmationmodal() {
    Swal.fire({
      title: this.dates,
      text: this.msg,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Confirm!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        // Swal.fire(
        //   'Confirm!',
        //   'Your imaginary file has been deleted.',
        //   'success'
        // )
        this.confirmleave()
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  confirmleave() {
    const data = {
      dates: this.dates,
      id: this.id,
      type: this.type1

    }
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    // console.log(data)

    this.allservices.confirmLeavedetail(data,config).subscribe(
      (x:any)=>{      
          Swal.fire('Confirm...', 'Your Leave Apply Successfully!', 'success')        
      }
    );
  }

}
