import { cleanUrl, getTimeAgo } from "@/lib/utils";
import { ScientificWorkContainerProps } from "@/types";

export default function ScientificWorkContainer({
    scientificWorkFile,
    author,
    createdAt,
    description,
}: ScientificWorkContainerProps) {
    const scientificWorkUrl = cleanUrl(scientificWorkFile.fields.file.url);
    const timeAgo = getTimeAgo(createdAt);
    return (
        <li>
            <article className="card-common-styles flex flex-col gap-4 justify-between">
                <p>
                    <span className="font-bold">Link: </span>
                    <a
                        href={scientificWorkUrl}
                        target="_blank"
                        className="underline wrap-break-word"
                    >
                        {scientificWorkUrl}
                    </a>
                </p>
                <p>
                    <span className="font-bold">Autor</span> - {author}
                </p>
                <p >{description}</p>
                <p className="font-bold">{timeAgo}</p>
            </article>
        </li>
    );
}
