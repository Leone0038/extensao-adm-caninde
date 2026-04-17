import { ExtensionProjectsLinkProps } from "@/types";
import Link from "next/link";

export default function ExtensionProjectsLink({
    href,
    label,
}: ExtensionProjectsLinkProps) {
    return (
        <Link href={href} className="border-l-4 border-secondary shadow-md p-8">
            <h3 className="font-bold text-secondary mb-4">EXTENSÃO</h3>
            <h2 className="font-bold text-black text-2xl">{label}</h2>
        </Link>
    );
}
