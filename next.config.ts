import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/Resume' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true, // GitHub Pages не поддерживает Next.js Image Optimization
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default withNextIntl(nextConfig);
