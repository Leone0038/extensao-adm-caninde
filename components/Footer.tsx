import logoFooter from "@/assets/logo-footer.webp";
import Logo from "./Logo";
export default function Footer() {
    return (
        <footer className="bg-tertiary p-4 flex md:flex-row flex-col justify-around gap-4 items-center text-primary text-start">
            <div>
                <Logo height={200} width={200} img={logoFooter} />
            </div>
            <div>
                <p className="font-bold">Desenvolvido por:</p>
                <p>© leonedantas80@gmail.com</p>
            </div>
            <div className="">
                <p className="font-bold">Endereço:</p>
                <p>Av. Dr. Aramis Paiva, 460 - Centro, Canindé - CE, 62700-000</p>
            </div>
        </footer>
    );
}
