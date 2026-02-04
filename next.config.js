/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Only use app directory for pages
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Experimental features
  experimental: {
    // Exclude src directory from output file tracing
    outputFileTracingExcludes: {
      '*': ['./src/**/*'],
    },
  },
  
  // Image optimization
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ESLint configuration
  eslint: {
    // Only run ESLint on these directories during builds
    dirs: ['app', 'components', 'lib'],
    // Don't ignore errors during build to catch issues early
    ignoreDuringBuilds: false,
  },

  // TypeScript configuration
  typescript: {
    // Don't ignore TypeScript errors during build
    ignoreBuildErrors: false,
  },

  // Compiler optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Note: src/ directory is already ignored via .vercelignore and outputFileTracingExcludes
    // Removing ignore-loader rule to prevent interference with Next.js CSS processing
    
    // Optimize bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },

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
