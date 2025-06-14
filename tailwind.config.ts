import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				heading: ['Poppins', 'sans-serif'],
				body: ['Roboto', 'Open Sans', 'sans-serif'],
			},
			colors: {
				background: "#f9f9f9",
				foreground: "#1f2937", // gray-800
				primary: {
					DEFAULT: "#4f46e5", // Indigo-600
					hover: "#4338ca",   // Indigo-700
					foreground: "#f9f9f9"
				},
				secondary: {
					DEFAULT: "#6366f1", // Indigo-500
					foreground: "#f9f9f9"
				},
				accent: {
					DEFAULT: "#6366f1", // Indigo-500
					foreground: "#f9f9f9"
				},
				muted: "#e5e7eb", // gray-200
				card: { DEFAULT: "#fff", foreground: "#1f2937" },
				border: "#e5e7eb"
			},
			borderRadius: {
				lg: '0.75rem',
				md: '0.5rem',
				sm: '0.375rem'
			},
			transitionProperty: {
				colors: 'background-color, border-color, color, fill, stroke',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
