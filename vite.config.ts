import { sentryVitePlugin } from "@sentry/vite-plugin";
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import mdx from "@mdx-js/rollup";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export default defineConfig({
  plugins: [{
    enforce: "pre",
    ...mdx({
      rehypePlugins: [rehypeHighlight],
      remarkPlugins: [remarkGfm],
    }),
  }, remixCloudflareDevProxy(), remix(), tsconfigPaths(), svgr(), sentryVitePlugin({
    org: "tometo-dev",
    project: "portfolio-remix"
  })],

  build: {
    sourcemap: true
  }
});