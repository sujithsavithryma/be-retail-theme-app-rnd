import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import for dev purpose
import { BeThemeModule } from 'projects/be-theme/src/public-api';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BeThemeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
