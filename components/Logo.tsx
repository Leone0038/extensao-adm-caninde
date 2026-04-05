import { LogoProps } from "@/types";
import Image from "next/image";

export default function Logo({ img, width, height }: LogoProps) {
    return (
        <Image
            src={img}
            alt="Logo"
            priority
            width={width}
            height={height}
            className="w-auto h-auto shrink-0"
        />
    );
}
