import { NgModule } from '@angular/core';
import { BeComponentsModule } from './core/components/public-api';
import { BeLayoutModule } from './core/layout/publi-api';

@NgModule({
	declarations: [],
	imports: [
		BeComponentsModule,
		BeLayoutModule
	],
	exports: []
})
export class BeThemeModule { }
