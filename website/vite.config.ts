import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

const projektRootDir = fileURLToPath(new URL('./', import.meta.url));
const dokumenteDir = path.resolve(projektRootDir, '../dokumente');

const config = defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
      prerender: { enabled: true, autoSubfolderIndex: true, crawlLinks: true },
    }),
    viteReact(),
  ],
  resolve: {
    alias: {
      '@dokumente': dokumenteDir,
    },
  },
  server: {
    fs: {
      allow: [projektRootDir, dokumenteDir],
    },
  },
  base: '/ki-werkstatt/',
});

export default config;
