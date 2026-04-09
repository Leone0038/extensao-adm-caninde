"use client";

import { cleanUrl } from "@/lib/utils";
import { SlideShowProps } from "@/types";
import Image from "next/image";
import arrowForward from "@/assets/arrow-forward.svg";
import arrowBackward from "@/assets/arrow-backward.svg";
import { useState } from "react";

export default function SlideShow({ photoIndex, photos }: SlideShowProps) {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(
        Number(photoIndex),
    );
    const prevPhoto = () => {
        setCurrentPhotoIndex((prev) =>
            prev - 1 < 0 ? photos.length - 1 : prev - 1,
        );
    };

    const nextPhoto = () => {
        setCurrentPhotoIndex((prev) =>
            prev + 1 === photos.length ? 0 : prev + 1,
        );
    };

    return (
        <section className="max-w-150 relative">
            <Image
                width={400}
                height={400}
                src={cleanUrl(photos[currentPhotoIndex].fields.file.url)}
                alt={`Imagem do carrosel - ${currentPhotoIndex + 1}`}
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
            />
            <div className="absolute inset-0 flex items-center justify-between [&_button]:cursor-pointer">
                <button
                    type="button"
                    onClick={prevPhoto}
                    className={`${currentPhotoIndex === 0 && "invisible"}`}
                >
                    <Image
                        width={100}
                        height={100}
                        alt="Foto anterior"
                        src={arrowBackward}
                    />
                </button>
                <button type="button" onClick={nextPhoto}    className={`${currentPhotoIndex === photos.length-1 && "invisible"}`}>
                    <Image
                        width={100}
                        height={100}
                        alt="Próxima foto"
                        src={arrowForward}
                    />
                </button>
            </div>
        </section>
    );
}
