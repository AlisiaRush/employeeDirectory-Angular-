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
  public filteredEmployees: Employee[] = [];
  public originalEmployees: Employee[] = [];
  public selectedDep = '';

  ngOnInit() {
    // get departments service call and assign to observable deparments$
    this.departments$ = this.employeeService.getDepartments();
    // get employee service call and assign to observable employees$ and return original employee data using "tap"
    this.employees$ = this.employeeService.getEmployees().pipe(
      tap((employees) => {
        this.originalEmployees = employees;
        this.filteredEmployees = [...this.originalEmployees];
      })
    );
  }

  public selectedDepartment(event: any): void {
    this.selectedDep = event.target.value;
    if (this.selectedDep) {
      this.filteredEmployees = this.originalEmployees.filter(
        ({ department }) => department === this.selectedDep
      );
    } else {
      this.filteredEmployees = [...this.originalEmployees];
    }
  }
}
