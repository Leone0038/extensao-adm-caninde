import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cursos e Oficinas - Extensão Adm Canindé",
};

export default function CoursesAndWorkShopsPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
