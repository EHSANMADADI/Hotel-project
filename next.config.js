/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "87.107.54.231",
       
      },
    ],
  },
};

module.exports = nextConfig;
