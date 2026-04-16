import CommonLink from "@/components/CommonLink";
import SlideShow from "@/components/SlideShow";
import { getSingleProject } from "@/lib/contentful";
import { ProjectSubPageProps } from "@/types";

export default async function SlideShowPage({
    params,
    searchParams,
}: ProjectSubPageProps) {
    const { id } = await params;
    const { index } = await searchParams;
    const { photos } = await getSingleProject(id);
    return (
        <main className="flex flex-col items-center gap-2 flex-1 p-8">
            <CommonLink
                href={`/projetos/fotos/${id}`}
                label="Voltar"
                styles="self-center w-30 text-xl"
            />
            <SlideShow photoIndex={index} photos={photos} />
        </main>
    );
}
