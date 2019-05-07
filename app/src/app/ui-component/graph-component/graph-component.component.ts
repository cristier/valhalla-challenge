import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { UiComponentService } from './../ui-component.service'

@Component({
  selector: 'graph-component',
  templateUrl: './graph-component.component.html'
})
export class GraphComponent {
  @Input() id;

  @ViewChild('graph') public chartEl: ElementRef;
  public _chartOptions: any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
    }]
  };

  constructor(private highcharts: UiComponentService) { }
  
  ngOnInit() {
    this.highcharts.drawChart(this.chartEl.nativeElement, this._chartOptions);

  }

  renderChart() {
      let highchartRender = Highcharts.chart(this.id, this._chartOptions);
	}
}
