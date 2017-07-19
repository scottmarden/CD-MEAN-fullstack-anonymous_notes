import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';
import { MongooseService } from '../mongoose.service';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

	newNote = {content: ""}
	@Output() newNoteEvent = new EventEmitter();

	constructor(private _mongooseService: MongooseService) { }

	ngOnInit() {
	}

	createNote(){
		this.newNoteEvent.emit(this.newNote);
	}

}
