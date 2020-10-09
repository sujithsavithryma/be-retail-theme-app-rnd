import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
// import for dev purpose
// import { BeThemeModule } from 'projects/be-theme/src/public-api';
import { BeLayoutModule } from 'projects/be-theme/src/lib/core/layout/publi-api';
import { BeComponentsModule } from 'projects/be-theme/src/lib/core/components/public-api';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './pages/components/components.component';
import { ComponentPageHeaderComponent } from './pages/components/component-page-header/component-page-header.component';
import { ComponentCategoryListComponent } from './pages/components/component-category-list/component-category-list.component';
import { ComponentCategorySidenavComponent } from './pages/components/component-category-sidenav/component-category-sidenav.component';
import { ComponentCategorySidenavContentComponent } from './pages/components/component-category-sidenav-content/component-category-sidenav-content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgxDatatableOverviewComponent } from './pages/components/ngx-datatable/ngx-datatable-overview/ngx-datatable-overview.component';
import { NgxDatatableApiComponent } from './pages/components/ngx-datatable/ngx-datatable-api/ngx-datatable-api.component';
import { NgxDatatableExamplesComponent } from './pages/components/ngx-datatable/ngx-datatable-examples/ngx-datatable-examples.component';

const routes: Routes = [
	{ path: 'components', component: ComponentsComponent,
		children: [
			{ path: 'categories', component: ComponentCategoryListComponent },
			{ path: 'ngx-datatable',
				children: [
					{ path: 'overview', component: NgxDatatableOverviewComponent },
					{ path: 'api', component: NgxDatatableApiComponent },
					{ path: 'examples', component: NgxDatatableExamplesComponent },
					{ path: '', redirectTo: 'overview', pathMatch: 'full' }
				]
			},
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
		NgxDatatableOverviewComponent,
		ComponentCategoryListComponent,
		ComponentCategorySidenavComponent,
		ComponentCategorySidenavContentComponent,
		FooterComponent,
		NgxDatatableApiComponent,
		NgxDatatableExamplesComponent
	],
	imports: [
		BrowserModule,
		// BeThemeModule,
		BeLayoutModule,
		BeComponentsModule,
		MatListModule,
		MatTabsModule,
		NgxDatatableModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		{
			provide: HIGHLIGHT_OPTIONS,
			useValue: {
			  fullLibraryLoader: () => import('highlight.js'),
			}
		  }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
