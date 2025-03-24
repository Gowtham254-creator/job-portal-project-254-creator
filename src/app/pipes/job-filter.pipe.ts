import { Pipe, PipeTransform } from '@angular/core';
import { Job } from './models/job.model'; // Assuming you have a Job model

@Pipe({
  name: 'jobFilter'
})
export class JobFilterPipe implements PipeTransform {

  transform(jobs: Job[], searchTerm: string): Job[] {
    if (!jobs || !searchTerm) {
      return jobs;
    }
    return jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
