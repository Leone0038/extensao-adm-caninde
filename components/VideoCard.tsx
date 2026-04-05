import { cleanUrl, getTimeAgo } from "@/lib/utils";
import { VideoCardProps } from "@/types";

export default function VideoCard({
    description,
    title,
    video,
    createdAt,
}: VideoCardProps) {
    const videoUrl = cleanUrl(video.fields.file.url);
    const timeAgo = getTimeAgo(createdAt);
    return (
        <li>
            <article className="card-common-styles flex-col-common-styles">
                <video
                    src={videoUrl}
                    preload="metadata"
                    controls
                    muted
                    playsInline
                    className="rounded shadow-md shadow-gray-600"
                ></video>
                <h2 className="h2-common-styles">{title}</h2>
                <p>{description}</p>
                <p className="font-bold">{timeAgo}</p>
            </article>
        </li>
    );
}
