/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{ hostname: "mqtt-node.vercel.app" }, {protocol: "http", hostname: "localhost", port: "3000"}],
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
