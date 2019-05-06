import { Component, OnInit, Input } from '@angular/core';
import { UiComponentService } from './../ui-component.service'

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponent implements OnInit {

  @Input() cardId: any;
  public content: any;
  constructor( private uiService: UiComponentService ) { }

  ngOnInit() {
    this.getDataPost();
  }

  getDataPost(){
    this.uiService.getCardsDataById( this.cardId, data => {
      this.content = data;
    }, error => {
      this.content = [];
      console.log('err',error)
    });
  }
}
