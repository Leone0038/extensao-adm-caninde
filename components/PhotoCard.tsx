import { cleanUrl } from "@/lib/utils";
import { PhotoCardProps } from "@/types";

import Image from "next/image";
const allowedIndexes = [0, 1, 2, 3, 4];

export default function PhotoCard({ photoUrl, index }: PhotoCardProps) {
    const imageUrl = cleanUrl(photoUrl);
    return (
        <li>
            <Image
                width={300}
                height={100}
                src={imageUrl}
                priority={allowedIndexes.includes(index)}
                alt={"Foto do projeto"}
                className="object-contain rounded w-auto h-auto shadow-md shadow-gray-800"
            />
        </li>
    );
}
