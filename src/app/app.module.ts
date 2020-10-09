import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import for dev purpose
// import { BeThemeModule } from 'projects/be-theme/src/public-api';
import { BeLayoutModule } from 'projects/be-theme/src/lib/core/layout/publi-api';
import { BeComponentsModule } from 'projects/be-theme/src/lib/core/components/public-api';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ComponentPageHeaderComponent } from './components/component-page-header/component-page-header.component';

const routes: Routes = [
	{ path: 'components', component: ComponentsComponent },
	{ path: '', redirectTo: 'components', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		ComponentsComponent,
		ComponentPageHeaderComponent
	],
	imports: [
		BrowserModule,
		// BeThemeModule,
		BeLayoutModule,
		BeComponentsModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
