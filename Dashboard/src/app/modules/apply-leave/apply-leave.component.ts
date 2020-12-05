import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent implements OnInit {
  type: SelectItem[];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.type = [{ label: 'Full Day', value: '1' },
    { label: 'Half Day', value: '0.5' },
    ];
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: new FormControl(''),
      date: new FormControl('', [Validators.required]),
      from_date:new FormControl('', [Validators.required]),
      to_date:new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),

    })
  }

}
