/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images:{
    domains:['occ-0-3933-116.1.nflxso.net', 'encrypted-tbn0.gstatic.com', 'raw.githubusercontent.com']
  }
}

module.exports = nextConfig
