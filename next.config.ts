import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/popcorn-web",
  assetPrefix: "/popcorn-web",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
