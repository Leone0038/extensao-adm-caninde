import { cleanUrl } from "@/lib/utils";
import { ModalProps } from "@/types";
import Image from "next/image";

export default function Modal({ currentPhotoIndex, photos,closeModal }: ModalProps) {
    return (
        <section className="fixed inset-0 backdrop-blur-lg p-4" onClick={closeModal}>
            <div className="relative w-full h-full">
                <Image
                    fill
                    src={cleanUrl(photos[currentPhotoIndex].fields.file.url)}
                    alt={`Foto #${currentPhotoIndex}`}
                    className="object-contain"
                    sizes="(max-width: 1280px) 80vw, (max-width: 768px) 100vw"
                />
            </div>
        </section>
    );
}
