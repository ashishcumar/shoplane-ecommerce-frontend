/** @type {import('next').NextConfig} */
require("dotenv").config();
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  resolve: {
    fallback: {
      net: false,
    },
  },
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
};

module.exports = nextConfig;
