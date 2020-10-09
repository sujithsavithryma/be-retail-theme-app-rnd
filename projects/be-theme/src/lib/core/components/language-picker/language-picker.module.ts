import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagePickerComponent } from './language-picker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
	declarations: [
		LanguagePickerComponent
	],
	imports: [
		CommonModule,
		MatMenuModule,
		MatButtonModule,
		MatNativeDateModule,
		BrowserAnimationsModule
	],
	exports: [
		LanguagePickerComponent
	]
})
export class BeLanguagePickerModule { }
