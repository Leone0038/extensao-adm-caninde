"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DynamicBreadcrumbs({
    projectName,
}: {
    projectName: string;
}) {
    const pathname = usePathname();
    const pathSegments = pathname
        .split("/")
        .filter((v) => v !== "" && v !== "projetos");

    return (
        <nav className="capitalize text-black p-4">
            <ol className="flex items-center gap-2">
                <li>
                    <Link href="/" className="">
                        Início
                    </Link>
                </li>
                <li>
                    <span>&gt;</span>
                </li>
                {pathSegments.map((segment, index) => {
                    const isLast = index === pathSegments.length - 1;
                    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    return (
                        <li key={index} className="flex items-center gap-2">
                            {!isLast && (
                                <>
                                    <Link href={href} className="">
                                        {segment}
                                    </Link>
                                    <span>&gt;</span>
                                </>
                            )}
                            {isLast && (
                                <span className="font-bold">{projectName}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
