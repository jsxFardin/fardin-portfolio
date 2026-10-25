/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

module.exports = nextConfig;
