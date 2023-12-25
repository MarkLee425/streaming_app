import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				button: {
					primary: '#9147ff',
					secondary: {
						dark: '#323232',
						light: '#efeff1',
					},
					hover: {
						primary: {
							dark: '#772ce8',
						},
						secondary: {
							dark: '#323232',
							light: '#DCDCDC',
						},
					},
				},
				navbar: {
					dark: '#191919',
					light: '#f7f7f8',
				},
				primary: {
					dark: '#efeff1',
					light: '#0e0e10',
				},
				popup: {
					dark: '#323232',
					light: '#E6E6E6',
				},
			},
		},
	},
	plugins: [],
};
export default config;
