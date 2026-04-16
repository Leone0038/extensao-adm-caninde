import CommonLink from "@/components/CommonLink";
import VideoLinks from "@/components/VideoLinks";
import { getSingleProject } from "@/lib/contentful";
import { ProjectSubPageProps } from "@/types";

export default async function VideosPage({ params }: ProjectSubPageProps) {
    const { id } = await params;
    const { videos } = await getSingleProject(id);
    return (
        <main className="page-common-styles">
            <CommonLink
                href={`/projetos/${id}`}
                label="Voltar"
                styles="mb-4 w-30 text-xl"
            />
            <VideoLinks videoLinks={videos} />
        </main>
    );
}
