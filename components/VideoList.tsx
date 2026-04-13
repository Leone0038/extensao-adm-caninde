import { VideoListProps } from "@/types";
import VideoCard from "./VideoCard";
import NoItemsNotice from "./NoItemsNotice";

export default function VideoList({ videos }: VideoListProps) {
    let processedVideos;
    if (videos) {
        processedVideos = videos.map((video, i) => (
            <VideoCard videoUrl={video.fields.file.url} key={i} />
        ));
    } else {
        processedVideos = <NoItemsNotice text="Nenhum vídeo postado ainda" />;
    }

    return <ul className="grid-common-styles mx-4">{processedVideos}</ul>;
}
