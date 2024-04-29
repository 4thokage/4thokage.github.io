import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import remarkCodeTitles from 'remark-code-titles';
import decapCmsOauth from "astro-decap-cms-oauth";
import cloudflare from "@astrojs/cloudflare";

// https://docs.astro.build/reference/configuration-reference
export default defineConfig( /** @type {import('astro').AstroUserConfig} */{
  output: 'server',
  site: 'https://jose-rodrigues.info',
  server: {
    // port: 4321, 
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'css-variables'
    },
    remarkPlugins: [remarkCodeTitles]
  },
  integrations: [mdx(), markdoc(), svelte(), tailwind({
    applyBaseStyles: false
  }), sitemap(), decapCmsOauth()],
  vite: {
    plugins: [],
    resolve: {
      alias: {
        $: path.resolve(__dirname, './src'),
        "svgo": import.meta.env.PROD ? "svgo/dist/svgo.browser.js" : "svgo"
      }
    },
    optimizeDeps: {
      allowNodeBuiltins: true
    }
  },
  adapter: cloudflare()
});
