import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'graph-component',
  templateUrl: './graph-component.component.html'
})
export class GraphComponent {
  @Input() config: any = {};
  @ViewChild('graph') public chartEl: ElementRef;

  ngOnInit() {
    this.renderChart();
  }

  renderChart() {
    Highcharts.chart(this.chartEl.nativeElement, this.config);
  }
}
