import BreadCrumbs from "@/components/BreadCrumbs";
import { getProjects } from "@/lib/contentful";
import { Project, ProjectTitle } from "@/types";
import Link from "next/link";

export default async function ProjectsList2026Page() {
    const projects = await getProjects();

    const projects2026: ProjectTitle[] = [];

    projects.map(({ fields, sys }) => {
        const { title, year } = fields as unknown as Project;
        const { id } = sys;
        if (year === 2026) {
            projects2026.push({ title, id });
        }
    });

    return (
        <main>
            <BreadCrumbs />
            <nav>
                <h2 className="font-extrabold text-lg text-secondary">
                    Projetos de Extensão 2026
                </h2>

                <ul className="list-disc list-inside p-2 *:my-4 underline">
                    {projects2026.map(({ id, title }) => (
                        <li key={id}>
                            <Link href={`/projetos/${id}`}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </main>
    );
}
