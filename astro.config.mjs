// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output:'server',
  adapter: vercel(),
  integrations: [svelte(), react()]
});