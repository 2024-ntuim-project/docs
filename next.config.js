const isProd = process.env.NODE_ENV === "production";

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true
});

const nextConfig = {
  basePath: isProd ? "/docs" : "",
  assetPrefix: isProd ? "https://2024-ntuim-project.github.io/docs/" : "",
  reactStrictMode: true,
  output: isProd ? "export" : "standalone",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};
module.exports = withNextra(nextConfig);
