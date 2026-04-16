import CommonLink from "@/components/CommonLink";
import ScientificWorkContainer from "@/components/ScientificWorkContainer";
import { getSingleProject } from "@/lib/contentful";
import { ProjectSubPageProps } from "@/types";

export default async function ScientificWorksPage({
    params,
}: ProjectSubPageProps) {
    const { id } = await params;
    const { scientificWorks } = await getSingleProject(id);
    return (
        <main className="page-common-styles">
            <CommonLink
                href={`/projetos/${id}`}
                label="Voltar"
                styles="mb-4 w-30 text-xl"
            />
            <ScientificWorkContainer scientificWorks={scientificWorks} />
        </main>
    );
}
