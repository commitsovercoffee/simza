/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				contrail: "'Contrail One', sans-serif ",
				caveat: "'Caveat Variable', sans-serif ",
				edu: "'Edu TAS Beginner Variable',sans-serif"
			},

			colors: {
				marker: '#1e2825',
				pencil: '#b47441',
				card: '#fff3d9',
				canvas: '#d3cbb4',
				unpressed: '#d2b475',
				pressed: '#a4a890'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
