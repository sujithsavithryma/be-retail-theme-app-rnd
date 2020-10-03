import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import for dev purpose
// import { BeThemeModule } from 'projects/be-theme/src/public-api';
import { LayoutModule } from 'projects/be-theme/src/lib/core/layout/publi-api';
import { ComponentsModule } from 'projects/be-theme/src/lib/core/components/public-api';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		// BeThemeModule,
		LayoutModule,
		ComponentsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
