import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Windows Defender blocks Next's dev lock inside the production .next folder.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

export default nextConfig;
