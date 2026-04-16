"use client";

import { BreadCrumbsProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs({ projectName }: BreadCrumbsProps) {
    const pathname = usePathname();
    const pathSegments = pathname
        .split("/")
        .filter((p) => p !== "projetos" && p !== "");
    const labelMap: Record<string, string> = {
        projetos: "Projetos",
        fotos: "Fotografias",
        videos: "Vídeos",
        resultados: "Produtos da ação",
        trabalhos: "Trabalhos científicos",
    };
    return (
        <nav className="pb-8 font-medium">
            <ol className="flex sm:flex-row flex-col text-lg items-center gap-2">
                <li>
                    <Link href="/">Início</Link>
                </li>
                {pathSegments.reverse().map((segment, i) => {
                    const isLast = i === pathSegments.length - 1;
                    const isID = segment.length > 15;
                    const href = `/${pathSegments.slice(0, i + 1).join("/")}`;
                    const displayLabel = isID ? projectName : labelMap[segment];
                    return (
                        <li key={i} className="flex items-center gap-2">
                            <span>&gt;</span>
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
