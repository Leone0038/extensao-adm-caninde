import { ProjectMenuOptions, ProjectMenuProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import cameraIcon from "@/assets/camera.svg";
import videoIcon from "@/assets/video.svg";
import cartIcon from "@/assets/cart.svg";
import docIcon from "@/assets/doc.svg";

const projectMenuOptions: ProjectMenuOptions[] = [
    { label: "Fotografias", icon: cameraIcon, href: "/projetos/fotos/" },
    { label: "Videos", icon: videoIcon, href: "/projetos/videos/" },
    {
        label: "Produtos da ação",
        icon: cartIcon,
        href: "/projetos/resultados/",
    },
    {
        label: "Trabalhos científicos",
        icon: docIcon,
        href: "/projetos/trabalhos/",
    },
];
export default function ProjectMenu({ id }: ProjectMenuProps) {
    return (
        <section className="flex flex-col gap-4">
            {projectMenuOptions.map(({ icon, label, href }, i) => (
                <Link
                    key={i}
                    href={`${href}${id}`}
                    className="flex gap-4 items-center secondary-style"
                >
                    <Image width={48} height={48} alt={label} src={icon} className="w-12 h-12" priority={i < 3} />
                    <p>{label} </p>
                </Link>
            ))}
        </section>
    );
}
