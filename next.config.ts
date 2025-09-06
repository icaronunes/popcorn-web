import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/popcorn-web" : '',
  assetPrefix: isProd ? "/popcorn-web" : '',
  distDir: 'out',
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
