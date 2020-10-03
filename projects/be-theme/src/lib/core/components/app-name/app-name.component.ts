import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'be-app-name',
	templateUrl: './app-name.component.html',
	styleUrls: ['./app-name.component.scss']
})
export class AppNameComponent implements OnInit {

	@Input() title;
	@Input() version;
	constructor() { }

	ngOnInit(): void {
	}

}
