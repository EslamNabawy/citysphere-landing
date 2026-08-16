// @ts-check
import { defineConfig } from 'astro/config';

// Static company landing page for CitySphere / NEBU.
export default defineConfig({
  site: 'https://citysphere.example',
  base: '/citysphere-landing',
  trailingSlash: 'ignore',
});
