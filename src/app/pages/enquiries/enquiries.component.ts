import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css'],
  imports: [ReactiveFormsModule]
})

export class EnquiriesComponent implements OnInit {

  enquiryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitEnquiry(): void {
    console.log(this.enquiryForm.value);
    // Add logic to submit the enquiry here
  }

}
