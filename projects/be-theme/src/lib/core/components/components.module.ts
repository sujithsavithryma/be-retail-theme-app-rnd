import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { AppNameTitle } from './app-title/app-title.component';


@NgModule({
	declarations: [
		AppNameTitle
	],
	imports: [
		CommonModule,
		MatButtonModule
	],
	exports: [
		AppNameTitle
	]
})
export class ComponentsModule { }
