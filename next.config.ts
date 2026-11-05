import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES_BASE_PATH || "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
