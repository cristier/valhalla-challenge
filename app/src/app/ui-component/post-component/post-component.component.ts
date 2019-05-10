import { Component, OnInit, Input } from '@angular/core';
import { UiComponentService } from './../ui-component.service'

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponent implements OnInit {

  @Input() cardId: any;
  public contentToShow: any;
  public pieChartConfig: any;
  constructor( private uiService: UiComponentService ) { }

  ngOnInit() {
    this.getDataPost();
  }

  getDataPost(){
    this.uiService.getCardsDataById( this.cardId, data => {
      this.getMainContent( data );
    }, error => {
      this.contentToShow = {};
      console.log('err',error)
    });
  }

  getMainContent( params ){
    this.contentToShow = {
      'graphData' : params[0].cardGraph,
      'title' : params[0].cardPost.postTitle,
      'image' : params[0].cardPost.postImageUrl,
      'description' : params[0].cardPost.postDescription
    }
    let updateConfig = Object.assign({}, this.uiService.getPieConfig());
    this.pieChartConfig = updateConfig;
    this.pieChartConfig.title.text = this.contentToShow.title;
    this.pieChartConfig.colors = this.setColorsToChart(this.contentToShow.title);
    this.pieChartConfig.series[0].data = this.contentToShow.graphData.data;
  }

  setColorsToChart ( param ){
    switch (param) {
      case 'JavaScript':
        return ['#F7D358', '#1C1C1C', '#A4A4A4'];
      case 'Cascading Style Sheets (CSS)':
        return ['#FA5858', '#585858', '#0489B1'];
      case 'Hypertext Markup Language (HTML)':
        return ['#2E9AFE', '#81BEF7', '#0A122A'];   
      case 'Node.js':
        return ['#088A29', '#74DF00', '#6E6E6E'];
      case 'Python':
        return ['#0489B1', '#F7D358', '#F8FBEF'];
      case 'Angular':
        return ['#F78181', '#FA5858', '#FF0000'];
    }
  }
}
