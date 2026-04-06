import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre - Extensão Adm Canindé",
};

export default function AboutPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
