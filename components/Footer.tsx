import logoFooter from "@/assets/main-logo.webp";
import Logo from "./Logo";
export default function Footer() {
    return (
        <footer className="bg-secondary text-text-primary p-4 flex lg:flex-row flex-col justify-around gap-4 items-center lg:text-start text-center">
            <Logo height={200} width={200} img={logoFooter} priority={false} />
            <div>
                <p className="font-bold">Desenvolvido por:</p>
                <p>© leonedantas80@gmail.com</p>
            </div>
            <div className="">
                <p className="font-bold">Endereço da instuição:</p>
                <p>
                    Av. Dr. Aramis Paiva, 460 - Centro, Canindé - CE, 62700-000
                </p>
            </div>
        </footer>
    );
}
