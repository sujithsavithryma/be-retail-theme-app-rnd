export interface Language {
	label: string;
	language: string;
}

export const LANGUAGES: Language[] = [
	{
		language: 'en',
		label: 'EN'
	},
	{
		language: 'fr',
		label: 'FR'
	},
	{
		language: 'nl',
		label: 'NL'
	}
];

export const SELECTED_LANGUAGE = 'fr';
