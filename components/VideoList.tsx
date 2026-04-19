import { VideoListProps } from "@/types";
import VideoCard from "./VideoCard";
import NoItemsNotice from "./NoItemsNotice";
import { cleanUrl } from "@/lib/utils";

export default function VideoList({ videos }: VideoListProps) {
    if (!videos || videos.length === 0) {
        return <NoItemsNotice text="Nenhum vídeo postado ainda" />;
    }

    return (
        <ul className="grid-common-styles">
            {videos.map((video, i) => (
                <VideoCard key={i} videoUrl={cleanUrl(video.fields.file.url)}/>
            ))}
        </ul>
    );
}
