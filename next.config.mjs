/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'akm-img-a-in.tosshub.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ichef.bbci.co.uk',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.cnn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.reuters.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.moneycontrol.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
