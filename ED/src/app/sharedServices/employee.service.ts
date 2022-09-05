import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../sharedModels/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  private departmentUrl = '/api/v2/departments';
  private emplyeeUrl = '/api/v2/employees';

  // get method for departments

  public getDepartments(): Observable<string[]> {
    return this.http.get<string[]>(this.departmentUrl);
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.emplyeeUrl);
  }
}
