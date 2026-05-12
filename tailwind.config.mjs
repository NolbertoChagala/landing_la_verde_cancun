/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'verde-cremoso': '#A7D477',
				'verde-hueso': '#3F4E4F',
				'aguacate-bg': '#F1F8E8',
			},
		},
	},
	plugins: [],
};