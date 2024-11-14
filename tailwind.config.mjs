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
				coral: "#FF7E7E",
				"dark-gray": "#454545",
				black: "#181818",
				"pure-black": "#000000",
				"off-white": "#F6F6F6",
				"light-gray": "#C0C0C0",
				"dark-black": "#101010",
				"light-black": "#272727"

			}
		},
	},
	plugins: [],
}
