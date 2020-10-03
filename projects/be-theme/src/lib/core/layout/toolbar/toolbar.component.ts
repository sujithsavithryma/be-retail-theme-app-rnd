import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'be-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	@Input() color = 'primary';
	constructor() { }

	ngOnInit(): void {
	}

}
