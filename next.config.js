/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  plugins: [['styled-components', { ssr: true }]]
}

module.exports = nextConfig
