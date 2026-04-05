import { cleanUrl, getTimeAgo } from "@/lib/utils";
import { NewsCardProps } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

import Image from "next/image";

const allowedIndexes = [0, 1, 2, 3, 4];

export default function NewsCard({
    description,
    image,
    title,
    index,
    author,
    createdAt,
}: NewsCardProps) {
    const imageUrl = cleanUrl(image.fields.file.url);

    const timeAgo = getTimeAgo(createdAt);
    return (
        <li className="">
            <article className="card-common-styles flex md:flex-row flex-col gap-3 md:items-start items-center">
                <Image
                    width={300}
                    height={300}
                    alt={title}
                    src={imageUrl}
                    priority={allowedIndexes.includes(index)}
                    className="rounded object-cover aspect-square w-auto h-auto"
                />
                <div className="flex flex-col p-4 gap-4">
                    <h2 className="h2-common-styles">{title}</h2>
                    <p >
                        <span className="font-bold ">Escrito por: </span>
                        {author}
                    </p>
                    <p className="font-bold">{timeAgo}</p>
                    <div className="overflow-y-auto h-50">
                        {documentToReactComponents(description as Document)}
                    </div>
                </div>
            </article>
        </li>
    );
}
