/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
    
	],
	theme: {
		extend: {
			colors: {
				  'theme-pruple':'#ba00b1',
				  'purple-bg':'392A48'
				}
		},
	},
	plugins: [],
};
