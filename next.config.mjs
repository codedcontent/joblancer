/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
    // domains: [
    //   "example.com",
    //   "anotherdomain.com",
    //   "lh3.googleusercontent.com",
    // ],
  },
};

export default nextConfig;
