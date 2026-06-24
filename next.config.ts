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
      {
        source: '/analysis/defence-at-a-glance-q1-2026',
        destination: '/publications/defence-at-a-glance-q2-2026',
        permanent: true,
      },
      {
        source: '/publications/defence-at-a-glance-q1-2026',
        destination: '/publications/defence-at-a-glance-q2-2026',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
