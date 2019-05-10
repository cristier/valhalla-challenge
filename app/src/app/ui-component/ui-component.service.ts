import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';

@Injectable()

export class UiComponentService {

	constructor( private http: HttpClient ){
    }

    public getCardsData( success, error ) : any {
	    const url = '/api/cards';
		this.get( url, success, error );
	}

    public getCardsDataById ( id, success, error ): any {
        const url = '/api/cards?id=' + id;
		this.get( url, success, error );
    }

    private get( url, success, error){
		this.http.get( url ).subscribe(
			result => {
				success( result );
			},
			err => {
				error( err );
			}
		);
	}

	public getPieConfig(){
		return {
			chart: {
			  plotBackgroundColor: null,
			  plotBorderWidth: null,
			  plotShadow: false,
			  backgroundColor:'transparent',
			  type: 'pie',
			  width:450,
			  height:450,
			},
			colors: [],
			title: {
			  text: '',
			  margin: 0,
			  y:0,
			  x:0,
			  useHTML: true,
			  align: 'center',
			  verticalAlign: 'middle'
			},
			plotOptions: {
			  pie: {
				  point: {
					  events: {
						  mouseOver: function(event) {
							  let highChartCntEl = this.series.chart.container;
							  this.changeChartTitle(highChartCntEl, this);
						  }
					  }
				  },
				  shadow: false,
				  borderColor: 'rgba(0,0,0,0.1)',
				  borderWidth: '0',
				  center: ['50%', '50%'],
				  cursor: 'pointer',
				  showInLegend: false,
				  dataLabels: {
					enabled: false,
					formatter: function() {
						return '';
					}
				}
			  }
			},
			legend: {
			  enabled: false,
			},
			series: [{
			  size: '70%',
			  innerSize: '60%',
			  data: []
			}],
			credits: {
			  enabled: false
			}
		};
	}
}
