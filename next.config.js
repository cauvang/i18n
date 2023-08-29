/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
  disable: process.env.NODE_ENV === 'development', // disable is help to disable PWA in deployment mode
  exclude: [/swagger-ui/],
})

const nextConfig = withPWA({
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  // output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=60, stale-while-revalidate=59',
          },
          {
            key: 'CDN-Cache-Control',
            value: 's-maxage=60, max-age=60',
          },
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 's-maxage=60, max-age=60',
          },
        ],
      },
    ]
  },
})

module.exports = nextConfig
