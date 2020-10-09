import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-component-category-sidenav-content',
	templateUrl: './component-category-sidenav-content.component.html',
	styleUrls: ['./component-category-sidenav-content.component.scss']
})
export class ComponentCategorySidenavContentComponent implements OnInit {

	sections = ['Overview', 'Api', 'Examples'];
	baseName = '';
	constructor(
		private router: Router
	) {
		this.baseName = this.router.url.split('/')[2];
	}

	ngOnInit(): void {
	}

}
