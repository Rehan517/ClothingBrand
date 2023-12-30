/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
},
}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "cdn.sanity.io", "lh3.googleusercontent.com"],
  },
}
