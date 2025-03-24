import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  imports: [CommonModule]
})
export class JobListComponent implements OnInit {
  jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'We are looking for a skilled software engineer to join our team.',
      location: 'New York',
      salary: '$100,000 - $150,000 per year'
    },
    {
      id: 2,
      title: 'Data Scientist',
      description: 'We are seeking a data scientist to analyze and interpret complex data sets.',
      location: 'San Francisco',
      salary: '$120,000 - $180,000 per year'
    },
    {
      id: 3,
      title: 'Product Manager',
      description: 'We are looking for a product manager to lead the development of new products.',
      location: 'Chicago',
      salary: '$90,000 - $140,000 per year'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  applyJob(job: any): void {
    console.log('Applying for job:', job.title);
    // Add logic to apply for the job here
  }

  deleteJob(jobId: number): void {
    console.log('Deleting job:', jobId);
    this.jobs = this.jobs.filter(job => job.id !== jobId);
  }
}
