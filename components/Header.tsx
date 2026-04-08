import logoHeader from "@/assets/main-logo.webp";

import Logo from "./Logo";

export default function Header() {
    return (
        <header className="bg-linear-to-r from-tertiary via-secondary to-primary h-100 flex lg:flex-row flex-col items-center justify-center">
            <div className="lg:border-r border-b border-gray-300">
                <Logo
                    height={400}
                    width={400}
                    img={logoHeader}
                    priority={true}
                />
            </div>
            <h2 className="px-8 text-2xl font-bold">
                Projetos de Extensão FECISC do Curso de Administração
            </h2>
        </header>
    );
}
