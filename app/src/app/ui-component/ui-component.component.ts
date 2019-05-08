import { Component, OnInit } from '@angular/core';
import { UiComponentService } from './ui-component.service'

@Component({
  selector: 'ui-component',
  templateUrl: './ui-component.component.html',
  styleUrls: ['./ui-component.component.scss']
})
export class UiComponent implements OnInit {

  public cardsContent: any[] = [];
  public filterContent: any[] = [];
  public pageToShow: string = 'dashboard';
  public cardId: any;
  constructor(private cardsDataService: UiComponentService) { }

  ngOnInit() {
    this.getData();
  }

  valueSelected( option ){
    var arrayFiltered = [];
    this.cardsContent.forEach(card => {
      let cardFiltered = card.cardTechnology.filter( tech => tech === option );
      if ( cardFiltered.length > 0 ) arrayFiltered.push( card );
    });
    this.filterContent = arrayFiltered;
  }

  switchToPost( cardId ){
    this.cardId = cardId;
    this.pageToShow = 'post';
  }

  switchToDashboard(){
    this.pageToShow = 'dashboard';
    this.filterContent = this.cardsContent;
  }

  getData(){
    this.cardsDataService.getCardsData( data => {
      this.cardsContent = data;
      this.filterContent = data;
    }, error => {
      this.cardsContent = [];
      console.log('err',error)
    });
  }
}
