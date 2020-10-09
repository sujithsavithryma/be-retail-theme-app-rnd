import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ngx-datatable-overview',
	templateUrl: './ngx-datatable-overview.component.html',
	styleUrls: ['./ngx-datatable-overview.component.scss']
})
export class NgxDatatableOverviewComponent implements OnInit {

	columns = [
		{ name: 'Price Protection', prop: 'priceProtection' },
		{ name: 'Designation', prop: 'designation' },
		{ name: 'Four', prop: 'fourId' },
		{ name: 'Nom Four', prop: 'fourName' },
		{ name: 'Date', prop: 'date' },
		{ name: '', prop: '' }
	];

	code = `<ngx-datatable #dataTable class="smart-data-table" [rows]="rows"
	[columns]="columns" >`;

	constructor() {
	}

	ngOnInit(): void {
	}

}
