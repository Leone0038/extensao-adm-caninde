import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notícias - Extensão Adm Canindé",
};

export default function NewsPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
