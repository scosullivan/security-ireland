import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/analysis/eu-presidency-defence-agenda',
        destination: '/publications/presidency-desk-primer',
        permanent: true,
      },
      {
        source: '/publications/eu-presidency-defence-agenda',
        destination: '/publications/presidency-desk-primer',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
