import { Component, OnInit } from '@angular/core';
import { UiComponentService } from './ui-component.service'

@Component({
  selector: 'ui-component',
  templateUrl: './ui-component.component.html',
  styleUrls: ['./ui-component.component.scss']
})
export class UiComponent implements OnInit {

  public cardsContent: any[] = [];
  public filterValue: any;
  public pageToShow: string = 'dashboard';
  public cardId: any;
  constructor(private cardsDataService: UiComponentService) { }

  ngOnInit() {
    this.getData();
  }

  valueSelected( option ){
    this.filterValue = option;
  }

  switchToPost( cardId ){
    this.cardId = cardId;
    this.pageToShow = 'post';
  }

  switchToDashboard(){
    this.pageToShow = 'dashboard';
  }

  getData(){
    this.cardsDataService.getCardsData( data => {
      this.cardsContent = data;
    }, error => {
      this.cardsContent = [];
      console.log('err',error)
    });
  }
}
