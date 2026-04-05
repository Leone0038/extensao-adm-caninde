import { cleanUrl } from "@/lib/utils";
import { VideoCardProps } from "@/types";

export default function VideoCard({
    description,
    title,
    video,
}: VideoCardProps) {
    const videoUrl = cleanUrl(video.fields.file.url);
    return (
        <li>
            <article className="card-common-styles">
                <video
                    src={videoUrl}
                    preload="metadata"
                    controls
                    muted
                    playsInline
                ></video>
                <h2 className="h2-common-styles">{title}</h2>
                <p>{description}</p>
            </article>
        </li>
    );
}
