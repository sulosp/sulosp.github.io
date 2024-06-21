/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/sulosp.github.io/' : '',
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  