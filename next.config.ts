import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  turbopack: {}, // Enable Turbopack
  async redirects() {
    return [
      {
        source: "/privacy-policy-3",
        destination: "/privacy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

