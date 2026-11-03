import type { NextConfig } from "next";

const nextConfig: NextConfig = {
poweredByHeader: false,

reactStrictMode: true,

images: {
unoptimized: true,
},

experimental: {
serverActions: {
bodySizeLimit: "10mb",
},
},
};

export default nextConfig;