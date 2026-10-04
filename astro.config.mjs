// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://getrichesapp.com',
	integrations: [mdx(), sitemap()],
	i18n: {
		defaultLocale: 'id',
		locales: ['id', 'en'],
		routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
	},
});
