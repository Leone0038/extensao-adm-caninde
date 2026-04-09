import CommonLink from "@/components/CommonLink";
import PhotoList from "@/components/PhotoList";
import ProjectResultCardList from "@/components/ProjectResultCardList";
import ScientificWorkContainerList from "@/components/ScientificWorkContainerList";
import Title from "@/components/Title";
import VideoList from "@/components/VideoList";
import { getSingleProject } from "@/lib/contentful";
import { SingleProjectPageParams, SocialMediaLinks } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import fbIcon from "@/assets/fb-icon.svg";
import instaIcon from "@/assets/insta-icon.svg";
import ytIcon from "@/assets/yt-icon.svg";
import Image from "next/image";
import Link from "next/link";

const socialMediaLinks: SocialMediaLinks[] = [
    { href: "/", icon: fbIcon, alt: "Ícone do Facebook" },

    { href: "/", icon: instaIcon, alt: "Ícone do Instagram" },

    { href: "/", icon: ytIcon, alt: "Ícone do Youtube" },
];

export default async function SingleProjectPage({
    params,
}: SingleProjectPageParams) {
    const { id } = await params;
    const {
        bursers,
        coordinator,
        summary,
        title,
        photos,
        results,
        scientificWorks,
        videos,
    } = await getSingleProject(id);

    return (
        <main className="flex gap-8 flex-col sm:items-start items-center">
            <CommonLink
                href="/"
                label="Voltar"
                styles="self-center mb-10 w-30 text-xl"
            />
            <Title text={title} />
            <p className="text-bg mx-4">
                <span className="font-bold">Coordenador(a): </span>
                {coordinator}
            </p>
            <Title text={"Resumo"} />
            <div className="text-bg max-w-150 mx-4">{documentToReactComponents(summary)}</div>
            <div className="flex gap-4 items-center">
                {socialMediaLinks.map((link, i) => (
                    <Link href={link.href} key={i}>
                        <Image
                            width={50}
                            height={50}
                            alt={link.alt}
                            src={link.icon}
                        />
                    </Link>
                ))}
            </div>
            <Title text={"Bolsistas"} />
            <div className="flex flex-col gap-4 text-bg mx-4">
                {documentToReactComponents(bursers)}
            </div>
            <Title text="Fotos" />
            <PhotoList photos={photos} />
            <Title text="Videos" />
            <VideoList videos={videos} />
            <Title text="Produtos da Ação" />
            <ProjectResultCardList results={results} />
            <Title text="Trabalhos Científicos" />
            <ScientificWorkContainerList scientificWorks={scientificWorks} />
        </main>
    );
}
