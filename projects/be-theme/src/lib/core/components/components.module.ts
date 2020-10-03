import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { AppNameComponent } from './app-name/app-name.component';


@NgModule({
	declarations: [
		AppNameComponent
	],
	imports: [
		CommonModule,
		MatButtonModule
	],
	exports: [
		AppNameComponent
	]
})
export class ComponentsModule { }
