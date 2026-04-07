import { cleanUrl } from "@/lib/utils";
import { VideoCardProps } from "@/types";

export default function VideoCard({ videoUrl }: VideoCardProps) {
    const cleanVideoUrl = cleanUrl(videoUrl);
    return (
        <li>
            <video
                src={cleanVideoUrl}
                preload="metadata"
                controls
                muted
                playsInline
                className="rounded shadow-md shadow-gray-800"
            ></video>
        </li>
    );
}
