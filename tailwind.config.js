/** @type {import('tailwindcss').Config} */

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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Portfolio specific colors
				navy: '#0a192f',
				lightNavy: '#112240',
				lightestNavy: '#233554',
				slate: '#8892b0',
				lightSlate: '#a8b2d1',
				lightestSlate: '#ccd6f6',
				white: '#e6f1ff',
				purple: '#9b87f5',
				darkPurple: '#7E69AB',
				// CodeByToma business (thème via CSS vars)
				paper: '#f6f7f9',
				chalk: '#ffffff',
				charcoal: '#141414',
				mute: '#6b7280',
				line: '#e5e7eb',
				cobalt: '#1b2a4a',
				cobaltSoft: '#2a3f66',
				ink: 'var(--cbt-ink)',
				surface: 'var(--cbt-surface)',
				mist: 'var(--cbt-mist)',
				snow: 'var(--cbt-snow)',
				cbtBorder: 'var(--cbt-border)',
				cbtBorderStrong: 'var(--cbt-border-strong)',
				cbtFill: 'var(--cbt-fill)',
				cbtGlow: 'var(--cbt-glow)',
				teal: '#2dd4bf',
				tealBright: '#5eead4',
			},
			fontFamily: {
				sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
				display: ['var(--font-body)', 'system-ui', 'sans-serif'],
				mono: ['ui-monospace', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'cbt-marquee': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				'cbt-marquee': 'cbt-marquee 72s linear infinite',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(10px)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
