import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fotografias - Extensão Adm Canindé",
};

export default function PhotosPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="fixed inset-0 bg-neutral-900 flex px-4 py-8">{children}</main>;
}
