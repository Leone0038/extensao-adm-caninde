import { cleanUrl } from "@/lib/utils";
import { ScientificWorkContainerProps } from "@/types";

export default function ScientificWorkContainer({
    scientificWorkUrl
}: ScientificWorkContainerProps) {
    const cleanScientificWorkUrl = cleanUrl(scientificWorkUrl);
    return (
        <li>
            <article className="card-common-styles flex flex-col gap-4 justify-between w-fit">
                <p>
                    <span className="font-bold">Link: </span>
                    <a
                        href={cleanScientificWorkUrl}
                        target="_blank"
                        className="underline wrap-break-word"
                    >
                        {cleanScientificWorkUrl}
                    </a>
                </p>
            </article>
        </li>
    );
}
