import { VideCardProps } from "@/types";

export default function VideoCard({ videoUrl }: VideCardProps) {
    return (
        <article>
            <video
                src={videoUrl}
                playsInline
                controls
                width={500}
                height={500}
                className="aspect-square object-cover"
            ></video>
        </article>
    );
}
