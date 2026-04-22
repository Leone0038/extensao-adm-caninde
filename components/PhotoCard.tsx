import { cleanUrl } from "@/lib/utils";
import { PhotoCardProps } from "@/types";

import Image from "next/image";

export default function PhotoCard({
    photoUrl,
    index,
description,
    openModal,
}: PhotoCardProps) {
    console.log(description)
    const imageUrl = cleanUrl(photoUrl);
    return (
        <li className="relative aspect-square rounded">
            <Image
                fill
                src={imageUrl}
                priority={index < 10}
                onClick={() => openModal(index)}
                alt={description || "Foto do projeto"}
                className="object-cover rounded aspect-square cursor-pointer"
                sizes="(max-width: 1280px) 80vw, (max-width: 768px) 100vw"
            />
        </li>
    );
}
