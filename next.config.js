/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Remove basePath completely for custom domain compatibility
  // GitHub Pages with custom domain serves from root, not subdirectory
}

module.exports = nextConfig
