import BreadCrumbs from "@/components/BreadCrumbs";
import { getProjects } from "@/lib/contentful";
import { Project, ProjectTitle } from "@/types";
import Link from "next/link";

export default async function ProjectsList2025Page() {
    const projects = await getProjects();
    const projects2025: ProjectTitle[] = [];

    projects.map(({ fields, sys }) => {
        const { title, year } = fields as unknown as Project;
        const { id } = sys;
        if (year === 2025) {
            projects2025.push({ title, id });
        }
    });
    return (
        <main>
            <BreadCrumbs/>
            <nav className="p-4 border-l border-gray-500 select-none h-fit">
                <h2 className="font-extrabold text-lg text-secondary">
                    Projetos de Extensão 2025
                </h2>
                <ul className="list-disc list-inside p-2 *:my-4 underline">
                    {projects2025.map(({ id, title }) => (
                        <li key={id}>
                            <Link href={`/projetos/${id}`}>{title}</Link>
                        </li>
                    ))}
                </ul>
              
            </nav>
        </main>
    );
}
