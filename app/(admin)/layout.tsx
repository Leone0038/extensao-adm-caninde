
export default function AdminPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="flex-1 flex justify-center p-4">{children}</main>;
}
