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

	public drawChart( element, options ) {
		Highcharts.chart(element, options);
	}
}
