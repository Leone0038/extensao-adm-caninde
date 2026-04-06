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
            {
                source: "/projetos",
                destination: "/projects",
            },
            {
                source: "/cursos-e-oficinas",
                destination: "/courses-and-workshops",
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
    allowedDevOrigins:
        process.env.NODE_ENV === "development"
            ? [process.env.ALLOWED_DEV_ORIGIN!]
            : [],
};

export default nextConfig;
