
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
				heading: ['Lora', 'serif'], // For headings
				sans: ['Inter', 'system-ui', 'sans-serif'], // For body
			},
			colors: {
				border: '#DDDDE6',
				input: '#E3E6EC',
				ring: '#CBBEDA',
				background: '#18181B', // A rich dark, not pitch black
				foreground: '#EFEDEF',
				primary: {
					DEFAULT: '#7A48FF', // Modern violet
					foreground: '#F2F7FA'
				},
				secondary: {
					DEFAULT: '#E16036', // Soft orange
					foreground: '#fff6ea'
				},
				accent: {
					DEFAULT: '#36c6e1', // Aqua
					foreground: '#1c2241'
				},
				success: '#34D399',
				card: { DEFAULT: '#232338', foreground: '#F2F7FA' },
				muted: { DEFAULT: '#34344a', foreground: '#C4BEE1' },
				destructive: { DEFAULT: '#e56464', foreground: '#fcfbfb' }
			},
			borderRadius: {
				lg: '1rem',
				md: '0.85rem',
				sm: '0.7rem'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
