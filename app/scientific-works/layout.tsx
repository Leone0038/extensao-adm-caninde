import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trabalhos Científicos - Extensão Adm Canindé",
};

export default function ScientificWorksPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
