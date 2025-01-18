/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["src/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#1b1b1b",
				light: "#f5f5f5",
				primary: "#B63E96",
				primaryDark: "#58E6D9",
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			animation: {
				'spin-slow': 'spin 8s linear infinite',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 6px, #f5f5f5 100px)',
				circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 6px, #1b1b1b 100px)',
				circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 6px, #f5f5f5 80px)',
				circularDarkLg: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 6px, #1b1b1b 80px)',
				circularLightMd:
					"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

				circularDarkMd:
					"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",

				circularLightSm:
					"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

				circularDarkSm:
					"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
			},
		},
		screens: {
			"2xl": { max: "1535px" },
			xl: { max: "1279px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "639px" },
			xs: { max: "479px" },
		},
	},
	plugins: [require("tailwindcss-animate")],
}
