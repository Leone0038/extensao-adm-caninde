import logoFooter from "@/assets/main-logo.webp";
import Logo from "./Logo";
import Link from "next/link";
const year = new Date().getFullYear()
export default function Footer() {
    return (
        <footer className="grid items-start">
            <div className="border-t-2 border-secondary  text-xs text-gray-600 py-4 px-8 flex lg:flex-row flex-col justify-around gap-4 items-center lg:text-start text-center [&_div]:w-80 tracking-wide">
                <Logo
                    height={200}
                    width={200}
                    img={logoFooter}
                    priority={false}
                />
                <div>
                    <p className="text-gray-700 font-semibold">
                        © {year} – FACULDADE DE EDUCAÇÃO E CIÊNCIAS INTEGRADAS DO
                        SERTÃO DE CANINDÉ – FECISC/UECE
                    </p>
                    <p>TODOS OS DIREITOS RESERVADOS</p>
                </div>
                <div className="">
                    <p className="text-gray-700 font-semibold">
                        FACULDADE DE EDUCAÇÃO E CIÊNCIAS INTEGRADAS DO SERTÃO DE
                        CANINDÉ – FECISC/UECE
                    </p>
                    <Link
                        href={"https://maps.app.goo.gl/vJLsGTaahGG9zQ2f8"}
                        className="hover:underline"
                        target="_blank"
                    >
                        Av. Dr. Aramis Paiva, 460 - Centro, Canindé - CE,
                        62700-000
                    </Link>
                </div>
            </div>
        </footer>
    );
}
