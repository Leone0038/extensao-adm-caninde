import CommonLink from "@/components/CommonLink";
import SlideShow from "@/components/SlideShow";
import { getSingleProject } from "@/lib/contentful";
import { PhotosPageProps } from "@/types";

export default async function PhotosPage({
    searchParams,
    params,
}: PhotosPageProps) {
    const { index } = await searchParams;
    const { id } = await params;
    const { photos } = await getSingleProject(id);
    const singlePhotoUrl = `/projects/photos/${id}/`;
    return (
        <main className="flex-1 flex flex-col items-center">
            <CommonLink
                href={`/projects/${id}`}
                label="Voltar"
                styles="self-center mb-10 w-30 text-xl"
            />
            <SlideShow
                photoIndex={index}
                photos={photos}
                singlePhotoUrl={singlePhotoUrl}
            />
        </main>
    );
}
