import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable static generation for error pages to avoid context issues
  generateStaticParams: false,
  experimental: {
    // Disable static optimization that might cause context issues
    isrMemoryCacheSize: 0,
  },
};

export default nextConfig;
