import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import mdx from "@mdx-js/rollup";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import { openGraphImage } from "remix-og-image/plugin";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        rehypePlugins: [rehypeHighlight],
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
      }),
    },
    remixCloudflareDevProxy(),
    remix(),
    tsconfigPaths(),
    svgr(),
    openGraphImage({
      elementSelector: "#og-image",
      outputDirectory: "./og",
      format: "jpeg",
    }),
  ],
});
