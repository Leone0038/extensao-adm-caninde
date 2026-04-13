import { getProjects } from "@/lib/contentful";
import { Project, ProjectTitle } from "@/types";
import Link from "next/link";

export default async function SideMenu() {
    const projects = await getProjects();
    const projects2025: ProjectTitle[] = [];
    const projects2026: ProjectTitle[] = [];

    projects.map(({ fields, sys }) => {
        const { title, year } = fields as unknown as Project;
        const { id } = sys;
        if (year === 2025) {
            projects2025.push({ title, id });
        } else if (year === 2026) {
            projects2026.push({ title, id });
        }
    });

    return (
        <nav className="p-4 border-l border-gray-500 select-none h-fit">
            <h2 className="font-bold text-lg text-secondary">Projetos de Extensão 2025</h2>
            <ul className="list-disc list-inside p-2 *:my-4 underline">
                {projects2025.map(({ id, title }) => (
                    <li key={id}>
                        <Link href={`/projetos/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
            <h2 className="font-bold text-lg text-secondary">Projetos de Extensão 2026</h2>

            <ul className="list-disc list-inside p-2 *:my-4 underline">
                {projects2026.map(({ id, title }) => (
                    <li key={id}>
                        <Link href={`/projetos/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
