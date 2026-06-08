/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Crucial for catching React lifecycle bugs
  images: {
    unoptimized: true, // Prevents Vercel image optimization limits if hosting statically
  }
};

export default nextConfig;