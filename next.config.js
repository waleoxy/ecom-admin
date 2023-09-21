/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "res.cloudinary.com",
    //     pathname: "",
    //     port: "",
    //   },
    // ],
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
