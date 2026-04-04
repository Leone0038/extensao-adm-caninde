import { cleanUrl } from "@/lib/utils";
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
}: NewsCardProps) {
    const imageUrl = cleanUrl(image.fields.file.url);
    return (
        <li className="">
            <article className="bg-primary p-4 rounded flex md:flex-row flex-col gap-3 md:items-start items-center">
                <Image
                    width={300}
                    height={100}
                    alt={title}
                    src={imageUrl}
                    priority={allowedIndexes.includes(index)}
                    className="rounded object-cover aspect-square w-auto h-auto"
                />
                <div className="flex flex-col p-4">
                    <h1 className={`text-xl mb-4 font-bold`}>{title}</h1>
                    {documentToReactComponents(description as Document)}
                </div>
            </article>
        </li>
    );
}
