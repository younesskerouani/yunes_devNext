/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.pexels.com"],
      },
     typescript: {
      ignoreBuildErrors: true,
     } ,
     eslint: {
      ignoreDuringBuilds: true,
    }
}

module.exports = nextConfig
