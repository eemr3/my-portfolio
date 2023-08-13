/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'github.com',
      'cbissn.ibict.br',
      'i.ibb.co',
      'user-images.githubusercontent.com',
      'www.datocms-assets.com',
    ],
  },
  i18n: {
    locales: ['pt-br', 'en-us'],
    defaultLocale: 'pt-br',
  },
};

module.exports = nextConfig;
