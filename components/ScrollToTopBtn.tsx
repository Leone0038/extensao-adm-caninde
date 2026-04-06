"use client";

import Image from "next/image";
import upArrow from "@/assets/up-arrow.svg";
import { useEffect, useState } from "react";

const scrollToTop = () => {
    scrollTo({ top: 0 });
};

export default function ScrollToTopBtn() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!isVisible) {
        return null;
    }
    return (
        <button
            type="button"
            className="shadow cursor-pointer fixed bottom-5 right-5 p-3 rounded-full bg-secondary grid place-content-center"
            onClick={scrollToTop}
            style={{
                touchAction: "none",
                pointerEvents: "auto",
                WebkitAppearance: "none",
            }}
        >
            <Image
                width={40}
                height={40}
                alt="Botão para o topo"
                src={upArrow}
            />
        </button>
    );
}
