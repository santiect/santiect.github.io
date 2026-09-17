import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// Site do professor (ECT/UFRN), publicado como GitHub Pages de usuário.
// Repositório <usuario>.github.io publica na raiz do domínio, então site/base
// não precisam de prefixo de subpasta.
export default defineConfig({
  site: "https://santiect.github.io",
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
