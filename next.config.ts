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
            {
                source: "/sobre",
                destination: "/about",
            },
             {
                source: "/trabalhos-cientificos",
                destination: "/scientific-works",
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
