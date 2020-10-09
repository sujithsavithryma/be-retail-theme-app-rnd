import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'be-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	private _classes: string[] = [];

	@Input() color = 'primary';
	@Input()
		set classes(classes: string | string[]) {
			if (Array.isArray(classes)) {
				this._classes = classes;
			} else {
				this._classes = [classes];
			}
		}
		get classes(): string | string[] {
			return this._classes.join(' ');
		}
	constructor() { }

	ngOnInit(): void {
	}

}
