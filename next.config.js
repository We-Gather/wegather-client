/** @type {import('next').NextConfig} */

const nextConfig = {};

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    paths: {
      react: ['node_modules/@types/react'],
    },
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};
