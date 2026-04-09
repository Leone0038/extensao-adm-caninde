"use client";

import { cleanUrl } from "@/lib/utils";
import { PhotoCardProps } from "@/types";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
const allowedIndexes = [0, 1, 2, 3, 4];

export default function PhotoCard({ photoUrl, index }: PhotoCardProps) {
    const imageUrl = cleanUrl(photoUrl);
    const { id } = useParams();
    return (
        <li id={id?.toString()}>
            <Link href={`/projetos/fotos/${id}?index=${index}`}>
                <Image
                    width={300}
                    height={300}
                    src={imageUrl}
                    priority={allowedIndexes.includes(index)}
                    alt={"Foto do projeto"}
                    className="object-cover text-bg rounded aspect-square"
                />
            </Link>
        </li>
    );
}
