import BreadCrumbs from "@/components/BreadCrumbs";
import VideoLinks from "@/components/VideoLinks";
import { getSingleProject } from "@/lib/contentful";
import { ProjectSubPageProps } from "@/types";

export default async function VideosPage({ params }: ProjectSubPageProps) {
    const { id } = await params;
    const { videos , title} = await getSingleProject(id);
    return (
        <main className="flex-1">
            <BreadCrumbs projectName={title} />
            <VideoLinks videoLinks={videos} />
        </main>
    );
}
