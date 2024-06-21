/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    assetPrefix: process.env.NODE_ENV === 'production' ? '/sulosp.github.io/' : '',
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  