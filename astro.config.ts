import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jamband.github.io/",
  base: "about/",
  trailingSlash: "always",
  devToolbar: { enabled: false },
});
