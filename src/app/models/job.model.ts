
export class Job {
  id: number;
  title: string;
  description: string;
  company: string;
  location: string;
  salary: number;

  constructor(id: number, title: string, description: string, company: string, location: string, salary: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.company = company;
    this.location = location;
    this.salary = salary;
  }
}
