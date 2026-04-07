import PhotoList from "@/components/PhotoList";
import ProjectResultCardList from "@/components/ProjectResultCardList";
import ScientificWorkContainerList from "@/components/ScientificWorkContainerList";
import Title from "@/components/Title";
import VideoList from "@/components/VideoList";
import { getPhotos, getSingleProject } from "@/lib/utils";
import { SingleProjectPageParams } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function SingleProjectPage({
    params,
}: SingleProjectPageParams) {
    const { id } = await params;
    const {
        bursers,
        coordinator,
        summary,
        title,
        photos,
        results,
        scientificWorks,
        videos,
        year,
    } = await getSingleProject(id);

    return (
        <main className="flex gap-4 flex-col">
            <Title text={title} />
            <p className="p-2">
                <span className="font-bold">Coordenador: </span>
                {coordinator}
            </p>
            <Title text={"Resumo"} />
            <div className="p-2">{documentToReactComponents(summary)}</div>
            <Title text={"Bolsistas"} />
            <div className="p-2 flex flex-col gap-4">
                {documentToReactComponents(bursers)}
            </div>
            <Title text="Fotos" />
            <PhotoList photos={photos} />
            <Title text="Videos" />
            <VideoList videos={videos} />
            <Title text="Produtos da Ação" />
            <ProjectResultCardList results={results}/>
            <Title text="Trabalhos Científicos" />
            <ScientificWorkContainerList scientificWorks={scientificWorks} />
        </main>
    );
}
