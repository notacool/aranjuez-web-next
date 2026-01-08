/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minio.notacool.com',
      },
      {
        protocol: 'https',
        hostname: 'www.aranjuez.es',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // typescript:{
  //   ignoreBuildErrors: true,
  // }
}

module.exports = nextConfig
