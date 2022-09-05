import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/sharedModels/employee.model';

@Component({
  selector: 'ed-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  @Input() public employees!: Employee[];

  constructor() {}

  ngOnInit(): void {}
}
