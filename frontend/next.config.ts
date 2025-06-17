import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Tismah-Global-Consultancy" : "",
  assetPrefix: isProd ? "/Tismah-Global-Consultancy/" : "./",
};

export default nextConfig;
