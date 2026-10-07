// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://andangcharisma.github.io',
	base: '/getriches',
	integrations: [mdx(), sitemap()],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'id'],
		routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
	},
});
