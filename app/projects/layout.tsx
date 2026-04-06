import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projetos - Extensão Adm Canindé",
};

export default function ProjectsPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
