import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/sharedModels/employee.model';

@Component({
  selector: 'ed-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  @Input() public employees!: Employee[];

  public currentPage = 1;
  public start = 0;
  public end = 6;
  private resultsPerPage = 6;

  public updateStartAndEnd(updateCurrentPage: number) {
    this.currentPage = updateCurrentPage;
    this.start = (updateCurrentPage - 1) * this.resultsPerPage;
    this.end = updateCurrentPage * this.resultsPerPage;
  }
}
