
import ExtensionProjectsLink from "./ExtensionProjectsLink";

export default async function SideMenu() {
  

    return (
        <nav className="flex flex-col gap-4">
            <ExtensionProjectsLink
                href="/projetos-lista-2025"
                label="Projetos de Extensão 2025"
            />
            <ExtensionProjectsLink
                href="/projetos-lista-2026"
                label="Projetos de Extensão 2026"
            />
        </nav>
    );
}


