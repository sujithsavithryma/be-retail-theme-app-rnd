import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarContentComponent } from './toolbar-content/toolbar-content.component';
import { ToolbarNavComponent } from './toolbar-nav/toolbar-nav.component';



@NgModule({
	declarations: [
		ViewComponent,
		ToolbarComponent,
		ToolbarContentComponent,
		ToolbarNavComponent
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
		MatRippleModule,
		RouterModule
	],
	exports: [
		ViewComponent,
		ToolbarComponent,
		ToolbarContentComponent,
		ToolbarNavComponent
	]
})
export class LayoutModule { }
