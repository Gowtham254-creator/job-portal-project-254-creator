
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:5000/';

  constructor(private http: HttpClient) { }

  getJobs(): any {
    return this.http.get(`${this.apiUrl}/jobs`);
  }

  postJob(job: any): any {
    return this.http.post(`${this.apiUrl}/jobs`, job);
  }

  getEnquiries(): any {
    return this.http.get(`${this.apiUrl}/enquiries`);
  }

  postEnquiry(enquiry: any): any {
    return this.http.post(`${this.apiUrl}/enquiries`, enquiry);
  }

}
