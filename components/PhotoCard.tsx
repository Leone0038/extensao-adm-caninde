import { cleanUrl } from "@/lib/utils";
import { PhotoCardProps } from "@/types";
import Image from "next/image";

const allowedIndexes = [0, 1, 2, 3, 4];

export default function PhotoCard({
    description,
    image,
    index,
    title,
}: PhotoCardProps) {
    const imageUrl = cleanUrl(image.fields.file.url);
    return (
        <li>
            <article className="card-common-styles flex flex-col gap-4">
                <Image
                    width={400}
                    height={200}
                    src={imageUrl}
                    priority={allowedIndexes.includes(index)}
                    alt={title}
                    className="h-auto w-auto object-contain rounded"
                />
                <h2 className="h2-common-styles">{title}</h2>
                <p>{description}</p>
            </article>
        </li>
    );
}
