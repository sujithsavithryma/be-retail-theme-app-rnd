import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import for dev purpose
// import { BeThemeModule } from 'projects/be-theme/src/public-api';
import { BeLayoutModule } from 'projects/be-theme/src/lib/core/layout/publi-api';
import { BeComponentsModule } from 'projects/be-theme/src/lib/core/components/public-api';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		// BeThemeModule,
		BeLayoutModule,
		BeComponentsModule,
		RouterModule.forRoot([])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
