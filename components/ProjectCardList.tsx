import { ProjectCardListProps, ProjectCardProps } from "@/types";
import NoItemsNotice from "./NoItemsNotice";
import ProjectCard from "./ProjectCard";

export default function ProjectCardList({ projects }: ProjectCardListProps) {
    const typedProjects = projects.map(({ fields, sys }) => {
        const { material, title, description } =
            fields as unknown as ProjectCardProps;
        const { id, createdAt } = sys;
        return { id, material, createdAt, title, description };
    });
    const projectsList = typedProjects.map((project) => (
        <ProjectCard {...project} key={project.id} />
    ));
    const processesedProjects =
        projects.length !== 0 ? (
            projectsList
        ) : (
            <NoItemsNotice text="Nenhum projeto postado ainda" />
        );
    return <ul className="grid grid-cols-1 gap-8 p-4">{processesedProjects}</ul>;
}
