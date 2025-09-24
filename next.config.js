/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // Update this with your GitHub repo name for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
}

module.exports = nextConfig
