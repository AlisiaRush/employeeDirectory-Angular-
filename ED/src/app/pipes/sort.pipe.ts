import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../sharedModels/employee.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(employees: Employee[]): Employee[] {
    employees = employees || [];
    return employees.sort(
      ({ dateOfHire: dateOfHireA }, { dateOfHire: dateOfHireB }) =>
        new Date(dateOfHireA).getTime() - new Date(dateOfHireB).getTime()
    );
  }
}
