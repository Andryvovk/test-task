import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StrCategory } from '../interfaces/category-interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  
  @Input() categories:StrCategory[];
  @Output() onFilter = new EventEmitter<StrCategory[]>();

  switchSelect(value) {
    value = !value;
  }

  filter() {
    this.onFilter.emit(this.categories)
  }
}
