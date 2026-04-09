import { cleanUrl } from "@/lib/utils";
import { SlideShowProps } from "@/types";
import Image from "next/image";
import arrowForward from "@/assets/arrow-forward.svg";
import arrowBackward from "@/assets/arrow-backward.svg";
import Link from "next/link";

export default function SlideShow({ photoIndex, photos, singlePhotoUrl }: SlideShowProps) {
    const prevArrowValue = Number(photoIndex) - 1;
    const nextArrowValue = Number(photoIndex) + 1;

    return (
        <section className="max-w-150 relative">
            <Image
                width={400}
                height={400}
                src={cleanUrl(photos[photoIndex].fields.file.url)}
                alt={`Imagem do carrosel - ${photoIndex + 1}`}
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
            />
            <div className="absolute inset-0 flex items-center justify-between [&_button]:cursor-pointer">
                <Link
                    href={`${singlePhotoUrl}?index=${prevArrowValue}`}
                    className={`${prevArrowValue < 0 ? "invisible" : "visible"}`}
                >
                    <Image
                        width={100}
                        height={100}
                        alt="Foto anterior"
                        src={arrowBackward}
                    />
                </Link>
                <Link
                    href={`${singlePhotoUrl}?index=${nextArrowValue}`}
                    className={`${nextArrowValue === photos.length ? "invisible" : "visible"}`}
                >
                    <Image
                        width={100}
                        height={100}
                        alt="Próxima foto"
                        src={arrowForward}
                    />
                </Link>
            </div>
        </section>
    );
}
