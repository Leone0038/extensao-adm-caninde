import logoHeader from "@/assets/logo-footer.webp";


import Logo from "./Logo";

export default function Header() {
    return (
        <header className="bg-secondary h-100 grid place-content-center">
            <Logo height={400} width={400} img={logoHeader} />
        </header>
    );
}
