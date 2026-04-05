import { cleanUrl, getTimeAgo } from "@/lib/utils";
import { PhotoCardProps } from "@/types";

import Image from "next/image";
const allowedIndexes = [0, 1, 2, 3, 4];

export default function PhotoCard({
    description,
    image,
    index,
    title,
    createdAt,
}: PhotoCardProps) {
    const imageUrl = cleanUrl(image.fields.file.url);
    const timeAgo = getTimeAgo(createdAt);
    return (
        <li >
            <article className="card-common-styles flex-col-common-styles">
                <Image
                    width={300}
                    height={100}
                    src={imageUrl}
                    priority={allowedIndexes.includes(index)}
                    alt={title}
                    className="object-contain rounded w-auto h-auto shadow-md shadow-gray-600"
                />
                <h2 className="h2-common-styles">{title}</h2>
                <p>{description}</p>
                <p className="font-bold">{timeAgo}</p>
            </article>
        </li>
    );
}
