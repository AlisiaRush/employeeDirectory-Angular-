import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from './sharedServices/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private employeeService: EmployeeService
  ) {}

  public departments$!: Observable<string[]>;

  ngOnInit() {
    this.departments$ = this.employeeService.getDepartments();
  }
}
