import { cleanUrl } from "@/lib/utils";
import { CourseCardProps } from "@/types";
import Image from "next/image";

const allowedIndexes = [0, 1, 2, 3, 4];

export default function CourseCard({
    description,
    image,
    courseName,
    index
}: CourseCardProps) {
    const imageUrl = cleanUrl(image.fields.file.url);
    return (
        <li>
            <article className="card-common-styles flex flex-col gap-2 h-full">
                <Image
                    width={300}
                    height={100}
                    src={imageUrl}
                    priority={allowedIndexes.includes(index)}
                    alt={courseName}
                    className="object-cover aspect-square rounded w-auto h-auto"
                />
                <h2 className="h2-common-styles">{courseName}</h2>
                <p className="h-20 overflow-y-auto">{description}</p>
            </article>
        </li>
    );
}
