import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class MongooseService {

	constructor(private _http: Http) { }

	retrieveNotes(){
		return this._http.get('/api/notes').map(data => data.json()).toPromise()
	}

	createNote(note){
		console.log("We'll add a note here")
		return this._http.post('/api/notes', note).map(data => data.json()).toPromise()
	}
}
