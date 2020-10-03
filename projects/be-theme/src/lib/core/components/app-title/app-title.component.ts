import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'be-app-title',
	templateUrl: './app-title.component.html',
	styleUrls: ['./app-title.component.scss']
})
export class AppNameTitle implements OnInit {

	@Input() title;
	@Input() version;
	constructor() { }

	ngOnInit(): void {
	}

}
