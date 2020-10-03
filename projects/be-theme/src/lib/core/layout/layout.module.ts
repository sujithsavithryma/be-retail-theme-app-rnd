import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ViewComponent } from './view/view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
	declarations: [
		ViewComponent,
		ToolbarComponent
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatSidenavModule,
		MatToolbarModule
	],
	exports: [
		ViewComponent,
		ToolbarComponent
	]
})
export class LayoutModule { }
