import { Component, OnInit, Input } from '@angular/core';
import { MongooseService } from '../mongoose.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	@Input() childNotes

	notes: Array<any>
	errors: Array<any> = []

	constructor() { }

	ngOnInit() {
	}

}
