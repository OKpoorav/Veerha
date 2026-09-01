import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Next blocks cross-origin dev-asset requests by default. Without these the
  // JS chunks never load when the site is opened over the LAN URL, and every
  // enter-animation stays stuck at its initial (invisible) state.
  allowedDevOrigins: ["10.114.7.30", "192.168.1.*", "*.local"],
};

export default nextConfig;
