import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fotografias - Extensão Adm Canindé",
};

export default function PhotosPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
