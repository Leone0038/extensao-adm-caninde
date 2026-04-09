import Title from "@/components/Title";
import VideoList from "@/components/VideoList";
import { getVideos } from "@/lib/utils";

export default async function VideosPage() {
    const videos = await getVideos();

    return (
        <main className="page-common-styles">
             <Title text="Videos" />
            <VideoList videos={videos} />
        </main>
    );
}
