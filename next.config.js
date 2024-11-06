/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  plugins: [['styled-components', { ssr: true }]],
  // typescript:{
  //   ignoreBuildErrors: true,
  // }
}

module.exports = nextConfig
