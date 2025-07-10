/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },

  webpack(config) {
    // Add support for custom font/image file types without file-loader
    config.module.rules.push({
      test: /\.(woff2?|woff|otf|eot|ttf|svg|jpg|jpeg|png|gif|webp)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name].[hash][ext]',
      },
    });

    return config;
  },
};

module.exports = nextConfig;
