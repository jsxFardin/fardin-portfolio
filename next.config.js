/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

module.exports = nextConfig;
