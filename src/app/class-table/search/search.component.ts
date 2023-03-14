import { Component, Output, EventEmitter, OnChanges } from '@angular/core';
import { OperationsService } from '../../services/operations.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';
 

  constructor(private operationsService: OperationsService){}

  clearSearch() {
    this.searchTerm = '';
    window.location.reload()
  }

  searchClasses() {
    this.search.emit(this.searchTerm);
  }

 
}
