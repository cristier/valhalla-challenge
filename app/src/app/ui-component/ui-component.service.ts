import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UiComponentService {

	constructor( private http: HttpClient ){
    }

    public getCardsData( success, error ) : any {
	    const url = '/api/cards';
		this.get( url, success, error );
	}

    public getCardsDataById ( id, success, error ): any {
        const url = '/api/cards/' + id;
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
}