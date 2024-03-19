/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
  async rewrites() {
    return [
      {
        destination: "/api/m3ter-head",
      },
    ];
  },
};
export default nextConfig;
