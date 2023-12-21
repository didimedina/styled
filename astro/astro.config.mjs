import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ["**/react/*.@(jsx|tsx)"],
    }),
    solidJs({
      include: ["**/solid/*.@(jsx|tsx)"],
    }),
    vue(),
    tailwind(),
  ],
});
