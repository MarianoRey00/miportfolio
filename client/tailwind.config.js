export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				ClashDisplay: ["Clash Display", "sans-serif"],
				CabinetGrotesk: ["Cabinet Grotesk", "sans-serif"],
			},
			colors: {
				customColor: {
					blue: "#1E2330",
					green: "#235C3D",
					purple: "#99489A",
					pink: "#e9c0e9",
					darkPink: "#C999C9",
					magenta: "#093D4B",
				},
			},
			backgroundImage: {
				pattern: "url('./assets/pattern3.png')",
				pattern2: "url('./assets/pattern.png')",
			},
			fontSize: {
				xxs: "10px",
			},
			screens: {
				xs: "501px",
				xxs: "401px",
			},
		},
	},
	plugins: [],
};
