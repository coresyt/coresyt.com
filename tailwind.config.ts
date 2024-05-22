import type { Config } from 'tailwindcss';
import theme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/components/*.svelte', './src/routes/*.svelte', './src/app.html'],
	theme: {
		extend: {
			colors: {
				clay: {
					'50': '#f5f5fa',
					'100': '#ebecf3',
					'200': '#d2d5e5',
					'300': '#aab0cf',
					'400': '#7c86b4',
					'500': '#5c689b',
					'600': '#485181',
					'700': '#3b4269',
					'800': '#343a58',
					'900': '#2f334b',
					'950': '#12131d'
				}
			},
			fontFamily: {
				sans: ['Geist', ...theme.fontFamily.sans],
				mono: ['Geist Mono', ...theme.fontFamily.mono]
			}
		}
	},
	plugins: []
} as Config;
