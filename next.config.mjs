import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,  // Deshabilitar la optimización de imágenes
      },
};

export default withNextIntl(nextConfig);
