import BreadCrumbs from "@/components/BreadCrumbs";
import VideoLinks from "@/components/VideoLinks";
import VideoList from "@/components/VideoList";
import { getSingleProject } from "@/lib/contentful";
import { ProjectSubPageProps } from "@/types";

export default async function VideosPage({ params }: ProjectSubPageProps) {
    const { id } = await params;
    const { videos, title, videoLinks } = await getSingleProject(id);
    return (
        <main className="flex-1">
            <BreadCrumbs projectName={title} />
            <VideoLinks videoLinks={videoLinks} />
            <VideoList videos={videos} />
        </main>
    );
}
