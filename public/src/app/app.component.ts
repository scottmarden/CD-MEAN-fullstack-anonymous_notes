import { Component } from '@angular/core';
import { MongooseService } from './mongoose.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Anonymous Notes';
	notes: Array<any>;
	errors: Array<any>;
	constructor(private _mongooseService: MongooseService){ }

	ngOnInit(){
		this.getAllNotes();
	}

	getAllNotes(){
		this._mongooseService.retrieveNotes()
		.then( notes => this.notes = notes)
		.catch( err => this.errors = err)
	}

	createNote(note){
		console.log("app.component: ", note)
		this._mongooseService.createNote(note)
		.then( response => {
			console.log(response)
			this.getAllNotes()
		})
		.catch( err => {
			this.errors = JSON.parse(err._body);
			console.log(this.errors)
		})
	}


}
