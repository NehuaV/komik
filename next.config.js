/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: "standalone",
};

export default config;
