// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://sr4380.github.io",
  base: "Columbia as Free Speech Test Ground",
  integrations: [mdx(), sitemap(), tailwind()],
});
