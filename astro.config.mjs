// @ts-check
import { defineConfig } from "astro/config";

import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://charlieop.com",
  markdown: {
    remarkPlugins: [[remarkToc, { maxDepth: 3, ordered: true, }]],
  },
});
