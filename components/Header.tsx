import logoHeader from "@/assets/main-logo.webp";

import Logo from "./Logo";

export default function Header() {
    return (
        <header className="text-center bg-linear-to-r from-tertiary via-secondary to-primary h-70 flex lg:flex-row flex-col items-center justify-center">
            <div className="lg:border-r border-gray-300">
                <Logo
                    height={300}
                    width={300}
                    img={logoHeader}
                    priority={true}
                />
            </div>
            <h2 className="px-8 sm:text-2xl text-xl font-bold text-amber-50">
                Projetos de Extensão FECISC do Curso de Administração
            </h2>
        </header>
    );
}
