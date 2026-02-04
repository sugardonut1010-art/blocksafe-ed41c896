/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Only use app directory for pages
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Exclude src directory from output file tracing
  outputFileTracingExcludes: {
    '*': ['./src/**/*'],
  },
  
  // Image optimization
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ESLint configuration moved to eslint.config.js or .eslintrc
  // ESLint options in next.config.js are no longer supported in Next.js 16

  // TypeScript configuration
  typescript: {
    // Don't ignore TypeScript errors during build
    ignoreBuildErrors: false,
  },

  // Compiler optimizations
  // swcMinify is now default in Next.js 16, no need to specify
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Note: Webpack configuration removed for Next.js 16
  // Next.js 16 uses Turbopack by default, which handles module fallbacks automatically
  // If you need webpack, you can explicitly opt-in, but Turbopack is recommended

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
