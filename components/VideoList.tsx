import { VideoListProps } from "@/types";
import VideoCard from "./VideoCard";
import NoItemsNotice from "./NoItemsNotice";

export default function VideoList({ videos }: VideoListProps) {
    const videoList = videos.map((video, i) => (
        <VideoCard videoUrl={video.fields.file.url} key={i} />
    ));
    const processedVideos =
        videos.length !== 0 ? (
            videoList
        ) : (
            <NoItemsNotice text="Nenhum vídeo postado ainda" />
        );
    return <ul className="grid-common-styles">{processedVideos}</ul>;
}
