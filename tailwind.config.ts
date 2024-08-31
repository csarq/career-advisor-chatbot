import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"fp-green": "#02404D",
				"fp-gold": "#ee9800",
			},
			gridTemplateRows: {
				custom: "auto 1fr",
			},
		},
	},
	plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
