import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponent {
  @Output() private filterValue = new EventEmitter<string>();

  public optionSelected: string;
  public options: string[] = ['Frontend', 'Backend'];
 
  public sendOption( val ) {
    this.filterValue.emit( val );
  }
}
