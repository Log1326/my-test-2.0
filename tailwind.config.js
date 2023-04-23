const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#FF7652',
				purple: '#6C5ECF',
				'light-blue': '#32A8E2',
				gray: {
					400: '#9898ad',
					500: '#6B6B7B',
					600: '#5B5B6B',
					800: '#353348',
					900: '#272532'
				}
			},
			boxShadow: {
				DEFAULT: '0 3px 12px rgba(0,0,0,0.03)',
				md: '0 3px 12px rgba(0,0,0,0.1)'
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'5%': {
						opacity: 0.3
					},
					'45%': {
						opacity: 0.6
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				},
				scaleOut: {
					'0%': {
						opacity: 1,
						transform: 'scale(1)'
					},
					'5%': {
						opacity: 0.8
					},
					'50%': {
						opacity: 0.4
					},
					'100%': {
						opacity: 0.1,
						transform: 'scale(0.2)'
					}
				}
			},
			fontSize: {
				xs: '.9rem',
				sm: '1rem',
				tiny: '1.2rem',
				base: '1.4rem',
				lg: '1.5rem',
				xl: '1.6rem',
				'2xl': '1.75rem',
				'3xl': '1.9rem',
				'4xl': '2.4rem',
				'5xl': '3.5rem',
				'6xl': '4.5rem',
				'7xl': '5.5rem'
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .5s ease-in-out',
				scaleOut: 'scaleOut .5s ease'
			}
		}
	},
	plugins: [
		plugin(({ addComponents }) => {
			addComponents({
				'.shadow-block': {
					display: 'block',
					boxShadow:
						'0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
					animation: 'scaleIn .35s ease-in-out',
					backgroundColor: '#272552'
				}
			})
		})
	]
}
