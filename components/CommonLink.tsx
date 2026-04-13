import { NavLink } from "@/types";
import Link from "next/link";

export default function CommonLink({ href, label, styles }: NavLink) {
    return (
        <Link
            href={href}
            className={`bg-secondary text-white p-2 rounded grid place-content-center hover:bg-green-800 transition-colors duration-300 ${styles}`}
        >
            {label}
        </Link>
    );
}
