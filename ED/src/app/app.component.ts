import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Employee } from './sharedModels/employee.model';
import { EmployeeService } from './sharedServices/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  public departments$!: Observable<string[]>;
  public employees$!: Observable<Employee[]>;
  public originalEmployees: Employee[] = [];

  ngOnInit() {
    this.departments$ = this.employeeService.getDepartments();
    this.employees$ = this.employeeService.getEmployees().pipe(
      tap((employees) => {
        this.originalEmployees = employees;
      })
    );
  }
}
