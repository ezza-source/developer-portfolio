/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: false,
  },
  compiler: {
    removeConsole: false,
  },
  swcMinify: false,
};

export default nextConfig;
