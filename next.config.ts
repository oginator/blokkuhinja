import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    root: path.join(process.cwd()),
  },
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
