import logoFooter from "@/assets/logo-footer.webp";
import Logo from "./Logo";
export default function Footer() {
    return (
        <footer className="bg-tertiary p-4 flex md:flex-row flex-col justify-between gap-4 items-center text-black">
              <Logo height={200} width={200} img={logoFooter}/>
            <p>Av. Dr. Aramis Paiva, 460 - Centro, Canindé - CE, 62700-000</p>
        </footer>
    );
}
