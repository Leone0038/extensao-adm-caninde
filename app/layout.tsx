import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Open_Sans } from "next/font/google";
import Providers from "./providers";

export const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-montserrat",
});
export const opensans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-opensans",
});

export const metadata: Metadata = {
    title: "Projetos de Extensão FECISC do Curso de Administração",
    description: "Conheça os projetos de extensão do curso de Administração da FECISC/UECE. Acompanhe nossas iniciativas acadêmicas e impactos na comunidade.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pt-BR"
            className={`scroll-smooth antialiased ${montserrat.variable} ${opensans.variable}`}
            data-scroll-behavior="smooth"
        >
            <body className="leading-normal min-h-dvh flex flex-col">
                <Providers>
                    <main className="flex flex-1">{children}</main>
                </Providers>
            </body>
        </html>
    );
}
