import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';
import tasks from './src/utils/tasks';

import { SITE } from './src/utils/config.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    site: SITE.site,
    base: SITE.base,
    trailingSlash: SITE.trailingSlash ? 'always' : 'never',
    output: 'static',

    defaultLocale: 'es',
    locales: ['es', 'en'],

    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        astroI18next(),
        sitemap(),
        icon({
            include: {
                tabler: ['*'],
            },
        }),
        tasks(),
    ],
    vite: {
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './src'),
            },
        },
    },
});
