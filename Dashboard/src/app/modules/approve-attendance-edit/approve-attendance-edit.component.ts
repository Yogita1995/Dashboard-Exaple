import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import Swal from 'sweetalert2';
import { AllservicesService } from '../services/allservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-approve-attendance-edit',
  templateUrl: './approve-attendance-edit.component.html',
  styleUrls: ['./approve-attendance-edit.component.scss']
})
export class ApproveAttendanceEditComponent implements OnInit {
  action: SelectItem[];
  form: FormGroup;
  id: any;
  type: any;
  date: any;

  constructor(private formBuilder: FormBuilder, private allservices: AllservicesService, private route: ActivatedRoute,) {
    this.action = [{ label: 'Approve', value: 'approved' },
    { label: 'Reject', value: 'rejected' },
    ];
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');
    this.date = this.route.snapshot.paramMap.get('date');


  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: new FormControl(this.id),
      apply_date: new FormControl(this.date),
      action: new FormControl('', [Validators.required]),
      type: new FormControl(this.type),

    })
  }
  onSubmit() {
    let formvalue=this.form.value
    const data = {
      apply_date: this.date,
      id: this.id,
      type: this.type,
      action:formvalue.action

    }
    console.log(data)
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    this.allservices.approveLeave(data,config).subscribe(
      (x:any)=>{      
          Swal.fire('Confirm...','', 'success')        
      }
    );
  }

}
