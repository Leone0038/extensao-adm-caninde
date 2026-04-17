import { LogoProps } from "@/types";
import Image from "next/image";

export default function Logo({
    img,
    width,
    height,
    priority,
    styles,
    alt,
    parentStyles
}: LogoProps) {
    return (
        <div className={parentStyles}>
            <Image
                src={img}
                alt={alt}
                priority={priority}
                width={width}
                height={height}
                className={`w-auto h-auto shrink-0 ${styles}`}
            />
        </div>
    );
}
