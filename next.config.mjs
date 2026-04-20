/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "play-lh.googleusercontent.com",
      "media.licdn.com",
    ],
  },
};

export default nextConfig;