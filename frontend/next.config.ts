import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "your-strapi-domain.com", // Replace with your production Strapi domain
      },
    ],
  },
  allowedDevOrigins: ["192.168.3.185"],
};

export default nextConfig;
