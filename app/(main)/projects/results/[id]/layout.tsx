import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Produtos da Ação - Extensão Adm Canindé",
};

export default function ProjectResultsPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
