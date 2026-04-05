import { VideoCardProps, VideoListProps } from "@/types";
import VideoCard from "./VideoCard";
import NoItemsNotice from "./NoItemsNotice";

export default function VideoList({ videos }: VideoListProps) {
    const typedVideos = videos.map(({ fields, sys }) => {
        const { description, video, title } =
            fields as unknown as VideoCardProps;
        const { id, createdAt } = sys;
        return { id, title, description, video , createdAt};
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
    return <ul className="grid-common-styles">
        {processedVideos}
    </ul>;
}
