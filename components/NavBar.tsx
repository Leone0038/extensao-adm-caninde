import { NavLink } from "@/types";
import CommonLink from "./CommonLink";

const links: NavLink[] = [
    {
        label: "Página Inicial",
        href: "/",
    },
    {
        label: "Notícias",
        href: "/noticias",
    },
    {
        label: "Fotografias",
        href: "/fotografias",
    },
    {
        label: "Vídeos",
        href: "/videos",
    },
    {
        label: "Projetos",
        href: "/projetos",
    },
    {
        label: "Trabalhos Científicos",
        href: "/trabalhos-cientificos",
    },
    {
        label: "Cursos e Oficinas",
        href: "/cursos-e-oficinas",
    },
    {
        label: "Sobre / Contato",
        href: "/sobre",
    },
];

export default function NavBar() {
    return (
        <nav className="grid lg:grid-cols-4 sm:grid-cols-4 grid-cols-2 text-center gap-4 max-w-300 items-stretch">
            {links.map(({ href, label }, i) => (
                <CommonLink href={href} label={label} key={i} />
            ))}
        </nav>
    );
}
