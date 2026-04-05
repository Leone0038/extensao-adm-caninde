import ProjectCardList from "@/components/ProjectCardList";
import Title from "@/components/Title";
import { getProjects } from "@/lib/utils";

export default async function ProjectsPage() {
    const projects = await getProjects();
    return (
        <main className="page-common-styles">
            <Title text="Projetos" />
            <ProjectCardList projects={projects} />
        </main>
    );
}
