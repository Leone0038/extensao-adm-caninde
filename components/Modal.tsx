"use client";
import { cleanUrl } from "@/lib/utils";
import { ModalProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import arrowForward from "@/assets/arrow-forward.svg";
import arrowBackward from "@/assets/arrow-backward.svg";
import closeIcon from "@/assets/close.svg";

export default function Modal({
    currentPhotoIndex,
    photos,
    closeModal,
}: ModalProps) {
    const [currentIndex, setCurrentIndex] = useState(currentPhotoIndex);
    const prevPhoto = () => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? photos.length - 1 : prev - 1,
        );
    };

    const nextPhoto = () => {
        setCurrentIndex((prev) => (prev + 1 === photos.length ? 0 : prev + 1));
    };

    return (
        <section className="bg-black/50 fixed z-50 inset-0 flex justify-center items-center p-4">
            <div className="backdrop-blur-lg bg-black/70 w-200 h-200 pointer-events-none">
                <div className="relative w-full h-full">
                    <Image
                        fill
                        src={cleanUrl(photos[currentIndex].fields.file.url)}
                        alt={`Foto #${currentPhotoIndex}`}
                        className="object-contain"
                        sizes="(max-width: 1280px) 80vw, (max-width: 768px) 100vw"
                    />
                    <button
                        type="button"
                        onClick={closeModal}
                        className={`absolute -top-4 -right-4 cursor-pointer pointer-events-auto`}
                    >
                        <Image
                            width={30}
                            height={30}
                            alt="Fechar modal"
                            src={closeIcon}
                        />
                    </button>
                </div>
                <div className="absolute inset-0 flex items-center justify-between [&_button]:cursor-pointer">
                    <button
                        type="button"
                        onClick={prevPhoto}
                        className={`${currentIndex === 0 && "invisible"} pointer-events-auto transition-transform duration-300 hover:scale-110`}
                    >
                        <Image
                            width={100}
                            height={100}
                            alt="Foto anterior"
                            src={arrowBackward}
                        />
                    </button>
                    <button
                        type="button"
                        onClick={nextPhoto}
                        className={`${currentIndex === photos.length - 1 && "invisible"} pointer-events-auto transition-transform duration-300 hover:scale-110`}
                    >
                        <Image
                            width={100}
                            height={100}
                            alt="Próxima foto"
                            src={arrowForward}
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
