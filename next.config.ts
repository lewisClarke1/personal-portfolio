const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  assetPrefix: isProd ? "/personal-portfolio/" : "",
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

module.exports = nextConfig;
