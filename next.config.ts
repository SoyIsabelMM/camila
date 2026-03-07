import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/camila',
  images: { unoptimized: true },
};

export default nextConfig;
