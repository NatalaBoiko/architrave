/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },

  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: [{ loader: "@svgr/webpack" }],
  //   });

  //   return config;
  // },

  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  //   });

  //   return config;
  // },
};

module.exports = nextConfig;
