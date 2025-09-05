import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/popcorn-web",
  // assetPrefix: "/popcorn-web/",
  // trailingSlash: true,
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
