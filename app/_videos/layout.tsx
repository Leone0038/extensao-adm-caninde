import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Videos - Extensão Adm Canindé",
};

export default function VideosPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
