import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://jamband.github.io/",
  base: "about/",
  trailingSlash: "always",
  devToolbar: { enabled: false },
  fonts: [
    {
      name: "Ubuntu",
      cssVariable: "--font-ubuntu",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
    },
    {
      name: "Ubuntu Mono",
      cssVariable: "--font-ubuntu-mono",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
    },
  ],
});
