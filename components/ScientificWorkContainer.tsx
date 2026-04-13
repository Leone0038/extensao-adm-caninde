import { cleanUrl } from "@/lib/utils";
import { ScientificWorkContainerProps } from "@/types";
import Link from "next/link";

export default function ScientificWorkContainer({
    scientificWorkUrl
}: ScientificWorkContainerProps) {
    const cleanScientificWorkUrl = cleanUrl(scientificWorkUrl);
    return (
        <li>
            <article className="card-common-styles flex flex-col gap-4 justify-between max-w-120">
                <p>
                    <span className="font-bold">Link: </span>
                    <Link
                        href={cleanScientificWorkUrl}
                        target="_blank"
                        className="underline break-all"
                    >
                        {cleanScientificWorkUrl}
                    </Link>
                </p>
            </article>
        </li>
    );
}
