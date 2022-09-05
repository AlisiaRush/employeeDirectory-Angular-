import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../sharedModels/employee.model';

import { map } from 'rxjs/operators';

const API_HOST = 'https://209.217.95.19:18100';

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
    return this.http.get<Employee[]>(this.emplyeeUrl).pipe(
      map((employees) =>
        employees.map((employee) => ({
          ...employee,
          avatar: `${API_HOST}${employee.avatar.replace('ap1', 'api')}`,
        }))
      )
    );
  }
}
