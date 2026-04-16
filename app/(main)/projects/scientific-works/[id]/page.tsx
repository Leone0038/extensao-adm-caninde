import BreadCrumbs from "@/components/BreadCrumbs";
import ScientificWorkContainer from "@/components/ScientificWorkContainer";
import { getSingleProject } from "@/lib/contentful";
import { ProjectSubPageProps } from "@/types";

export default async function ScientificWorksPage({
    params,
}: ProjectSubPageProps) {
    const { id } = await params;
    const { scientificWorks, title } = await getSingleProject(id);
    return (
        <main className="page-common-styles">
         <BreadCrumbs projectName={title} />
            <ScientificWorkContainer scientificWorks={scientificWorks} />
        </main>
    );
}
