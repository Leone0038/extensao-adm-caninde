import { cleanUrl } from "@/lib/utils";
import { ProjectResultCardProps } from "@/types";

export default function ProjectResultCard({
    resultUrl,
}: ProjectResultCardProps) {
    const cleanResultUrl = cleanUrl(resultUrl);
    return (
        <li>
            <article className="card-common-styles flex flex-col gap-4 justify-between min-w-0 w-full max-w-120 overflow-hidden">
                <a
                    href={cleanResultUrl}
                    target="_blank"
                    className="underline break-all"
                >
                    {cleanResultUrl}
                </a>
            </article>
        </li>
    );
}
