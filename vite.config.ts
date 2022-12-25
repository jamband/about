import autoprefixer from "autoprefixer";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import htmlInclude from "./plugins/html-include";
import htmlMinify from "./plugins/html-minify";

const root = resolve(__dirname, "src");

export default defineConfig({
  base: "/about/",
  root,
  publicDir: resolve(root, "public"),
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(root, "index.html"),
        404: resolve(root, "404.html"),
        plusarchive: resolve(root, "plusarchive/index.html"),
        tapes: resolve(root, "tapes/index.html"),
        blog: resolve(root, "blog/index.html"),
        denene: resolve(root, "denene/index.html"),
      },
      output: {
        chunkFileNames: "assets/[hash].js",
        assetFileNames: "assets/[hash][extname]",
      },
    },
  },
  plugins: [htmlInclude(), htmlMinify()],
});
