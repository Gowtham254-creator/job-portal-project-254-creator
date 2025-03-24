import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css'],
  imports: [ReactiveFormsModule]
})
export class JobPostComponent implements OnInit {

  jobPostForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  postJob(): void {
    console.log(this.jobPostForm.value);
    // Add logic to post the job here
  }
}
