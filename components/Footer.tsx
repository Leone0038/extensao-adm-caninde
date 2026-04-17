"use client";

import logoFooter from "@/assets/main-logo.webp";
import Logo from "./Logo";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
    const [year, setYear] = useState<number>(0);

    useEffect(() => {
        const updateYear = () => {
            setYear(new Date().getFullYear());
        };
        updateYear();
    }, []);
    return (
        <footer className="border-t-2 border-secondary text-xs text-gray-600 p-4 flex lg:flex-row flex-col justify-around gap-8 items-center lg:text-start text-center [&_div]:max-w-80 tracking-wide">
            <Logo height={200} width={200} img={logoFooter} priority={false} alt="Logo rodapé"/>
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
                    Av. Dr. Aramis Paiva, 460 - Centro, Canindé - CE, 62700-000
                </Link>
            </div>
        </footer>
    );
}
