import BreadCrumbs from "@/components/BreadCrumbs";
import PhotoList from "@/components/PhotoList";
import { getSingleProject } from "@/lib/contentful";
import {  ProjectSubPageProps } from "@/types";

export default async function PhotosPage({ params }: ProjectSubPageProps) {
    const { id } = await params;
    const { photos, title } = await getSingleProject(id);
    return (
        <main className="flex-1">
           
            <BreadCrumbs projectName={title}/>
            <PhotoList photos={photos} />
        </main>
    );
}
