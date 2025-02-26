/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "img.clerk.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

module.exports = nextConfig;
