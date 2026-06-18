import type { NextConfig } from "next";

// Static export for GitHub Pages.
// Served from https://kikiyop.github.io/madeinchina/ — hence the basePath.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/madeinchina",
  images: { unoptimized: true },
};

export default nextConfig;
