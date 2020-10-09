import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-component-category-sidenav',
	templateUrl: './component-category-sidenav.component.html',
	styleUrls: ['./component-category-sidenav.component.scss']
})
export class ComponentCategorySidenavComponent implements OnInit {

	navs = [
		{ name: 'NGX Datatable', link: 'ngx-datatable' }
	]

	constructor() { }

	ngOnInit(): void {
	}

}
