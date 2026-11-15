import type { NextConfig } from "next";

// GitHub Pages serves project sites from /<repo-name>; the deploy workflow sets this.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

// PPR (cacheComponents / partialPrefetching) can't run in export mode, so it's
// only enabled for local dev and server builds.
const isPagesBuild = Boolean(basePath);

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { loader: "custom", loaderFile: "./src/image-loader.ts" },
  trailingSlash: true,
  cacheComponents: !isPagesBuild,
  partialPrefetching: !isPagesBuild,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
