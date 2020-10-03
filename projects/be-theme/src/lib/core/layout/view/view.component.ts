import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'be-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

	@Input() theme: 'light' | 'dark' = 'light';
	constructor() { }

	ngOnInit(): void {
	}

}
