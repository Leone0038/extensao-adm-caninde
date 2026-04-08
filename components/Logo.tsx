import { LogoProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ img, width, height, priority ,styles }: LogoProps) {
    return (
        <Link href="/">
            <Image
                src={img}
                alt="Logo"
                priority={priority}
                width={width}
                height={height}
                className={`w-auto h-auto shrink-0 ${styles}`}
            />
        </Link>
    );
}
