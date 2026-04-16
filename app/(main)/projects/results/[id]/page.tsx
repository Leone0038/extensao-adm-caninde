import BreadCrumbs from "@/components/BreadCrumbs";
import ProjectResultCard from "@/components/ProjectResultCard";
import { getSingleProject } from "@/lib/contentful";
import { ProjectSubPageProps } from "@/types";

export default async function ProjectResultsPage({
    params,
}: ProjectSubPageProps) {
    const { id } = await params;
    const { results, title } = await getSingleProject(id);
    return (
        <main className="page-common-styles">
            <BreadCrumbs projectName={title} />
            <ProjectResultCard results={results} />
        </main>
    );
}
