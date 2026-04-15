/* eslint-disable @next/next/no-img-element */
import { LogoProps } from "@/types";
import Link from "next/link";

export default function Logo({
    img,
    width,
    height,
    styles,
}: LogoProps) {
    return (
        <Link href="/">
            <img
                src={img.src}
                alt="Logo"
                width={width}
                height={height}
                className={`w-auto h-auto shrink-0 ${styles}`}
                decoding="async"
            />
        </Link>
    );
}
