/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	safelist: [
		{
			pattern: /bg-.+/
		},
		'mocha',
		'macchiato',
		'frappe',
		'latte'
	],
	plugins: [
		require('@catppuccin/tailwindcss')({
			prefix: 'ctp',
			defaultFlavour: 'mocha'
		})
	]
};
