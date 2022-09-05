import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ed-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Output() pageChange = new EventEmitter<number>();
  public pages = [1, 2, 3];

  public updatePage(updatePageNumber: number) {
    this.pageChange.emit(updatePageNumber);
  }
}
