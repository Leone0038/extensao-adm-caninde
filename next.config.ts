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
                source: "/sobre",
                destination: "/about",
            },
            {
                source: "/trabalhos-cientificos",
                destination: "/scientific-works",
            },
            {
                source: "/projetos/:id",
                destination: "/projects/:id",
            },
              {
                source: "/projetos/fotos/:id",
                destination: "/projects/photos/:id",
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
