/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/m3ter-head/:seed",
        destination: "/api/m3ter-head",
      },
    ];
  },
};
export default nextConfig;
