import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNameTitle } from './app-title.component';

describe('AppNameTitle', () => {
	let component: AppNameTitle;
	let fixture: ComponentFixture<AppNameTitle>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppNameTitle]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppNameTitle);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
