import CommonLink from "@/components/CommonLink";
import ProjectResultCard from "@/components/ProjectResultCard";
import { getSingleProject } from "@/lib/contentful";
import { ProjectSubPageProps } from "@/types";

export default async function ProjectResultsPage({
    params,
}: ProjectSubPageProps) {
    const { id } = await params;
    const { results } = await getSingleProject(id);
    return (
        <main className="page-common-styles">
            <CommonLink
                href={`/projetos/${id}`}
                label="Voltar"
                styles="mb-4 w-30 text-xl"
            />
            <ProjectResultCard results={results} />
        </main>
    );
}
