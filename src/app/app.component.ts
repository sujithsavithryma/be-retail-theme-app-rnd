import { Component } from '@angular/core';
import { BeNav } from 'dist/be-theme/lib/core/layout/toolbar-nav/toolbar-nav.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'be-theme-app';

	navs: BeNav[] = [
		{ name: 'Components', link: 'components' }
	];
}
