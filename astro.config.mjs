import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    site: 'https://nice-astro-rss.netlify.app',
    output: 'hybrid',
    integrations: [react(), solidJs()]
});
