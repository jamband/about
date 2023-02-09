import { defineConfig } from "astro/config";
import htmlMinify from "./integrations/html-minify";

export default defineConfig({
  site: "https://jamband.github.io/",
  base: "/about",
  trailingSlash: "always",
  integrations: [htmlMinify()],
});
