import { NavLink } from "@/types";
import Link from "next/link";


export default function CommonLink({href, label}: NavLink) {
    return <Link href={href} className="bg-secondary p-2 rounded grid place-content-center">{label}</Link>;
}
