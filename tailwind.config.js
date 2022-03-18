module.exports = {
	content: ["./build/*.{html,js}", "./docs/*.{html,js}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				rad: {
					bg: '#ffefdf',
					blue: '#cce2de',
					red: '#da5858',
					green: '#40614e',
					black: '#141204'
				},
			},
			fontFamily: {
				body: "ivypresto-display, serif",
				sans: "Open Sans, Helvetica, Arial, sans-serif",
				title: "ivypresto-display, serif",
			},
			fontSize: {
				"xs": ["min(4vw, 0.75rem)", "1rem"],
				"sm": ["min(5vw, 0.875rem)", "1.25rem"],
				"base": ["min(6vw, 1rem)", "1.5rem"],
				"lg": ["min(25vw, 1.125rem)", "1.75rem"],
				"xl": ["min(25vw, 1.25rem)", "1.75rem"],
				"2xl": ["min(25vw, 1.5rem)", "2rem"],
				"3xl": ["min(25vw, 1.875rem)", "2.25rem"],
				"4xl": ["min(25vw, 2.25rem)", "2.5rem"],
				"5xl": ["min(25vw, 3rem)", "1"],
				"6xl": ["min(25vw, 3.75rem)", "1"],
				"7xl": ["min(25vw, 4.5rem)", "1"],
				"8xl": ["min(25vw, 6rem)", "1"],
				"9xl": ["min(25vw, 8rem)", "1"],
			}
		}
	},
	variants: {
		extend: {
			divideColor: ["responsive", "dark"],
			padding: ["responsive", "dark"],
		},
	},
	plugins: [require("daisyui")],
};
