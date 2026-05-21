import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        search: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        search: "",
      },
      {
        protocol: "https",
        hostname: "your-strapi-domain.com", // Replace with your production Strapi domain
      },
    ],
  },
  allowedDevOrigins: ["192.168.3.77"],
};

export default nextConfig;
