import { Component, EventEmitter, Output, forwardRef, Input } from '@angular/core';

@Component({
  selector: 'search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponent {
  @Input() searchInCards: string = "";
  @Output() searchInCardsChange: EventEmitter<string> = new EventEmitter<string>();
}
