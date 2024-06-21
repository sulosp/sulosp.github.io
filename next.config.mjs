/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,  // <=== enables static exports
    assetPrefix: process.env.NODE_ENV === 'production' ? '/sulosp.github.io/' : '',
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  