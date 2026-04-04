import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    async rewrites() {
        return [
            {
                source: "/destaques",
                destination: "/highlights",
            },
            {
                source: "/noticias",
                destination: "/news",
            },
             {
                source: "/fotos",
                destination: "/photos",
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
            },
        ],
    },
};

export default nextConfig;
