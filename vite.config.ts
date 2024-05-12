import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import mdx from "@mdx-js/rollup";
import rehypeHighlight from "rehype-highlight";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        rehypePlugins: [rehypeHighlight],
      }),
    },
    remixCloudflareDevProxy(),
    remix(),
    tsconfigPaths(),
    svgr(),
  ],
});
