"use client";

import { BreadCrumbsProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs({ projectName, year }: BreadCrumbsProps) {
    const pathname = usePathname();
    let pathSegments = pathname
        .split("/")
        .filter((p) => p !== "projetos" && p !== "");
    if (year === 2025) {
        pathSegments.unshift("projetos-lista-2025");
    } else if (year === 2026) {
        pathSegments.unshift("projetos-lista-2026");
    } else if (
        pathSegments.includes("fotos") ||
        pathSegments.includes("videos") ||
        pathSegments.includes("resultados") ||
        pathSegments.includes("trabalhos")
    ) {
        pathSegments = pathSegments.reverse();
    }
    const labelMap: Record<string, string> = {
        projetos: "Projetos",
        fotos: "Fotografias",
        videos: "Vídeos",
        resultados: "Produtos da ação",
        trabalhos: "Trabalhos científicos",
        sobre: "Sobre",
        "projetos-lista-2025": "Projetos de Extensão 2025",
        "projetos-lista-2026": "Projetos de Extensão 2026",
    };
    return (
        <nav className="pb-8 font-medium text-center [&_a]:hover:underline">
            <ol className="flex sm:flex-row flex-col text-lg items-center gap-2">
                <li>
                    <Link href="/">Início</Link>
                </li>
                {pathSegments.map((segment, i) => {
                    const isLast = i === pathSegments.length - 1;
                    const isID =
                        segment.length > 15 && !segment.includes("projetos");
                    const href = `/${pathSegments.slice(0, i + 1).join("/")}`;
                    const displayLabel = isID ? projectName?.slice(0, 30) + '...' : labelMap[segment];
                    return (
                        <li
                            key={i}
                            className="flex items-center gap-2"
                        >
                            <span>/</span>
                            {isLast ? (
                                <span> {displayLabel} </span>
                            ) : (
                                <Link href={isID ? "/projetos" + href : href}>
                                    {displayLabel}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
