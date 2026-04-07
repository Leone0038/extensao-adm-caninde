import { cleanUrl } from "@/lib/utils";
import { ProjectResultCardProps } from "@/types";

export default function ProjectResultCard({
    resultUrl,
}: ProjectResultCardProps) {
    const cleanResultUrl = cleanUrl(resultUrl);
    return (
        <li>
            <article className="card-common-styles flex flex-col gap-4 justify-between w-fit">
                <a
                    href={cleanResultUrl}
                    target="_blank"
                    className="underline wrap-break-word"
                >
                    {cleanResultUrl}
                </a>
            </article>
        </li>
    );
}
