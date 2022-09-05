import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  private departmentUrl = '/api/v1/departments';

  // get method for departments

  public getDepartments(): Observable<string[]> {
    return this.http.get<string[]>(this.departmentUrl);
  }
}
