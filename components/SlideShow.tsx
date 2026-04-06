"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = Array.from(
    { length: 5 },
    (_, i) => `/images/carousel-${i + 1}.webp`,
);

export default function SlideShow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const slide = () => {
            setCurrentImageIndex((prev) =>
                prev + 1 === images.length ? 0 : prev + 1,
            );
        };
        const intervalID = setInterval(() => {
            slide();
        }, 3000);
        return () => {
            clearInterval(intervalID);
        };
    }, []);
    return (
        <section className="self-center overflow-hidden aspect-square shadow-xl shadow-gray-400 border-0 rounded max-w-150 w-full">
            <div
                className="flex w-full h-full transition duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
            >
                {images.map((img, i) => (
                    <div className="relative w-full h-full shrink-0" key={i}>
                        <Image
                            key={i + 1}
                            fill
                            src={img}
                            alt={`Imagem do carrosel - ${i + 1}`}
                            priority={i === 0 || i === 1}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
