import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // Move it out here, directly inside the main object:
  allowedDevOrigins: ['192.168.56.1'],
};

export default nextConfig;