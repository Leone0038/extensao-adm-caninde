import { getTimeAgo } from "@/lib/utils";
import { ProjectCardProps } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectCard({
    createdAt,
    description,
    material,
    title,
}: ProjectCardProps) {
    const timeAgo = getTimeAgo(createdAt);
    return (
        <li>
            <article className="card-common-styles flex flex-col gap-4 justify-between">
                <h2 className="h2-common-styles">{title}</h2>
                <div>{documentToReactComponents(description)}</div>
                <p className="font-bold">{timeAgo}</p>
                <p className="font-bold">Material:</p>
                <ul className="list-disc list-inside">
                    {material.map(
                        (
                            {
                                fields: {
                                    file: { url },
                                },
                            },
                            i,
                        ) => (
                            <li key={i}>
                                <a
                                    href={url}
                                    target="_blank"
                                    className="underline"
                                >
                                    {url}
                                </a>
                            </li>
                        ),
                    )}
                </ul>
            </article>
        </li>
    );
}
