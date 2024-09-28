/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/register",
        destination: "/auth/register", 
      },
      {
        source: "/login",
        destination: "/auth/login", 
      },
      {
        source: "/:path*",
        destination: "/pages/:path*", 
      },
    ];
  },
};

export default nextConfig;
