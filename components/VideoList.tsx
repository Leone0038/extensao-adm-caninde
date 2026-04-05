import { VideoCardProps, VideoListProps } from "@/types";
import VideoCard from "./VideoCard";
import NoItemsNotice from "./NoItemsNotice";

export default function VideoList({ videos }: VideoListProps) {
    const typedVideos = videos.map(({ fields, sys }) => {
        const { description, video, title } =
            fields as unknown as VideoCardProps;
        const { id } = sys;
        return { id, title, description, video };
    });
    const videoList = typedVideos.map((video) => (
        <VideoCard {...video} key={video.id} />
    ));
    const processedVideos =
        videos.length !== 0 ? (
            videoList
        ) : (
            <NoItemsNotice text="Nenhum vídeo postado ainda"/>
        );
    return <ul className="p-4 grid md:grid-cols-4 grid-cols-1 gap-4">
        {processedVideos}
    </ul>;
}
