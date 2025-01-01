/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["fakestoreapi.com"],
  },
};

export default nextConfig;
