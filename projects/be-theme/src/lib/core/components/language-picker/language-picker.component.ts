import { Component, Input, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { Language, LANGUAGES, SELECTED_LANGUAGE } from './languages.model';

@Component({
	selector: 'be-language-picker',
	templateUrl: './language-picker.component.html',
	styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

	@Input() availabelLang: Language[] = LANGUAGES;
	public selectedLang: string = SELECTED_LANGUAGE;
	constructor(
		public translate: TranslateService,
		// private storeService: StoreService,
		private dateAd: DateAdapter<Date>
	) { }

	ngOnInit(): void {
		let language = [];
		language = LANGUAGES.map((language: Language) => language.language);
		this.translate.addLangs(language);

		// if (this.storeService.locale) {
		// 	const browserLang = this.storeService.locale;
		// 	this.selectedLang = browserLang.match(/en|fr|nl/) ? browserLang : "fr";
		// 	this.translate.use(this.selectedLang);
		// } else {
		// 	this.storeService.locale = 'fr';
		// 	this.translate.setDefaultLang("fr");
		// 	this.selectedLang = "fr";
		// }
		this.translate.use(this.selectedLang);
		this.dateAd.setLocale(this.selectedLang);
	}

	changeLanguage(language: string): void {
		this.selectedLang = language;
		// this.storeService.locale = language;
		this.translate.use(language);
		this.dateAd.setLocale(this.selectedLang);
	}

}
