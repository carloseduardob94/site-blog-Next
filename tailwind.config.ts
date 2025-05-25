import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1200px',
			},
		},
		extend: {
			colors: {
				white: '#FFFFFF',
				blue: {
					100: '#7EA4D7',
					200: '#2C85FC',
					300: '#2266C1',
					400: '#0D284C',
				},
				cyan: {
					100: '#2DEBFC',
					200: '#187D86',
					300: '#0E474C',
				},
				gray: {
					100: '#F9FAFC',
					200: '#D3D5D9',
					300: '#93979F',
					400: '#20242C',
					500: '#16181D',
					600: '#14161A',
					700: '#101216',
					800: '#0B0C0F',
				},
			},
			borderRadius: {
				lg: '0.5rem',
				md: 'calc(0.5rem - 2px)',
				sm: 'calc(0.5rem - 4px)',
			},
			fontFamily: {
				sans: ['PT Sans Caption', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			fontSize: {
				// Headings - PT Sans Caption
				'heading-hg': ['40px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-xl': ['32px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-lg': ['28px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-md': ['24px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-sm': ['20px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-xs': ['16px', { lineHeight: '120%', fontWeight: '700' }],

				// Body - Inter
				'body-md': ['16px', { lineHeight: '150%', fontWeight: '400' }],
				'body-sm': ['14px', { lineHeight: '150%', fontWeight: '400' }],
				'body-xs': ['12px', { lineHeight: '150%', fontWeight: '400' }],

				// Action - Inter
				'action-md': ['16px', { lineHeight: 'normal', fontWeight: '500' }],
				'action-sm': ['14px', { lineHeight: 'normal', fontWeight: '500' }],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
