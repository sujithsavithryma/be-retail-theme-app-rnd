import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
// import for dev purpose
// import { BeThemeModule } from 'projects/be-theme/src/public-api';
import { BeLayoutModule } from 'projects/be-theme/src/lib/core/layout/publi-api';
import { BeComponentsModule } from 'projects/be-theme/src/lib/core/components/public-api';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ComponentPageHeaderComponent } from './components/component-page-header/component-page-header.component';
import { NgxDatatableComponent } from './components/ngx-datatable/ngx-datatable.component';
import { ComponentCategoryListComponent } from './components/component-category-list/component-category-list.component';
import { ComponentCategorySidenavComponent } from './components/component-category-sidenav/component-category-sidenav.component';
import { ComponentCategorySidenavContentComponent } from './components/component-category-sidenav-content/component-category-sidenav-content.component';

const routes: Routes = [
	{ path: 'components', component: ComponentsComponent,
		children: [
			{ path: 'categories', component: ComponentCategoryListComponent },
			{ path: 'ngx-datatable', component: NgxDatatableComponent },
			{ path: '', redirectTo: 'categories', pathMatch: 'full' }
		]
	},
	{ path: '', redirectTo: 'components', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		ComponentsComponent,
		ComponentPageHeaderComponent,
		NgxDatatableComponent,
		ComponentCategoryListComponent,
		ComponentCategorySidenavComponent,
		ComponentCategorySidenavContentComponent
	],
	imports: [
		BrowserModule,
		// BeThemeModule,
		BeLayoutModule,
		BeComponentsModule,
		MatListModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
