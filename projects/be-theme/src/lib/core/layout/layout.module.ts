import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ViewComponent } from './view/view.component';



@NgModule({
	declarations: [
		ViewComponent
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatSidenavModule,
		MatToolbarModule
	],
	exports: [
		ViewComponent
	]
})
export class LayoutModule { }
