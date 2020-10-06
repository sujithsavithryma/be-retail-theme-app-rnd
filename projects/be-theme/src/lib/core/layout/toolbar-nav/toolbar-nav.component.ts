import { Component, Input, OnInit } from '@angular/core';
import { BeNav } from './toolbar-nav.model';

@Component({
	selector: 'be-toolbar-nav',
	templateUrl: './toolbar-nav.component.html',
	styleUrls: ['./toolbar-nav.component.scss']
})
export class ToolbarNavComponent implements OnInit {

	@Input() navs: BeNav[] = [];

	@Input() navStyle: number = 1;

	constructor() { }

	ngOnInit(): void {
	}

}
