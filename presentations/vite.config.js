import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "node:path";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [
    tailwindcss(),
    isProd && viteSingleFile(),
    viteStaticCopy({
      targets: [
        { src: path.resolve(__dirname, "../poster/**/*.jpeg"), dest: "poster" },
      ],
    }),
  ].filter(Boolean),
  server: {
    fs: {
      allow: [path.resolve(__dirname), path.resolve(__dirname, "../poster")],
    },
  },
});
