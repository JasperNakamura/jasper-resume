/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/nextjs-pages",
  assetPrefix: isProduction ? '/{jasper-resume}' : '',
}

module.exports = nextConfig
