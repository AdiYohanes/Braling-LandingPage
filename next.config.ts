import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'custom-images.strikinglycdn.com',
      },
    ],
  },
};

export default nextConfig;
