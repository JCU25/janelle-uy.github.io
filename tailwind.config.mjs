/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"dark-magenta": "#9E05C4",
				magenta: "#BB37DC",
				purple: "#844BFF",
				"navy-blue": "#065F91",
				coral: "#FF7E7E"
			}
		},
	},
	plugins: [],
}
