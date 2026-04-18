import { cleanUrl } from "@/lib/utils";
import { PhotoCardProps } from "@/types";

import Image from "next/image";

export default function PhotoCard({
    photoUrl,
    index,
    openModal,
}: PhotoCardProps) {
    const imageUrl = cleanUrl(photoUrl);
    return (
        <li className="relative aspect-square rounded">
            <Image
                fill
                src={imageUrl}
                priority={index < 4}
                onClick={() => openModal(index)}
                alt={"Foto do projeto"}
                className="object-cover rounded aspect-square cursor-pointer"
                sizes="100vw"
            />
        </li>
    );
}
