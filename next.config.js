const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  mode: 'production',
  runtimeCaching,
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
  buildExcludes: [/middleware-manifest\.json$/],
  disable: false,
});

const nextConfig = withPWA({
  eslint: {
    dirs: ['.'],
  },
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      ''
    ],
  },
  poweredByHeader: false,
  trailingSlash: false,
  basePath: '',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  productionBrowserSourceMaps: true,
  async redirects() {
    return [
      {
        source: '/_error',
        destination: '/404',
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
