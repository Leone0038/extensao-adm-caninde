import CommonLink from "@/components/CommonLink";
import PhotoList from "@/components/PhotoList";
import { getSingleProject } from "@/lib/contentful";
import {  ProjectSubPageProps } from "@/types";

export default async function PhotosPage({ params }: ProjectSubPageProps) {
    const { id } = await params;
    const { photos } = await getSingleProject(id);
    return (
        <main className="page-common-styles">
            <CommonLink
                href={`/projetos/${id}`}
                label="Voltar"
                styles="mb-10 w-30 text-xl"
            />
            <PhotoList photos={photos} />
        </main>
    );
}
