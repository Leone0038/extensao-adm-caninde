import Title from "@/components/Title";
import { getSingleProject } from "@/lib/contentful";
import { SingleProjectPageParams } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import fbIcon from "@/assets/fb-icon.svg";
// import instaIcon from "@/assets/insta-icon.svg";
// import ytIcon from "@/assets/yt-icon.svg";

import ProjectMenu from "@/components/ProjectMenu";
import BreadCrumbs from "@/components/BreadCrumbs";
import Logo from "@/components/Logo";
import { cleanUrl } from "@/lib/utils";

// const socialMediaLinks: SocialMediaLinks[] = [
//     { href: "/", icon: fbIcon, alt: "Ícone do Facebook" },

//     { href: "/", icon: instaIcon, alt: "Ícone do Instagram" },

//     { href: "/", icon: ytIcon, alt: "Ícone do Youtube" },
// ];

export default async function SingleProjectPage({
    params,
}: SingleProjectPageParams) {
    const { id } = await params;
    const { bursers, coordinator, summary, title, year, logo } =
        await getSingleProject(id);
    const logoUrl = logo?.fields.file.url;
    return (
        <main className="flex flex-col">
            <BreadCrumbs projectName={title} year={year} />
            {logoUrl && (
                <Logo
                    width={200}
                    height={200}
                    alt={`Logo do projeto: ${title}`}
                    img={cleanUrl(logoUrl)}
                    styles="p-4"
                    priority={true}
                />
            )}
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-12">
                <section className="lg:col-span-2 flex flex-col items-start gap-4">
                    <Title text={title + " (" + year + ")"} />
                    <p className="mx-4 text-bg">
                        <span className="font-bold">Coordenador(a): </span>
                        {coordinator}
                    </p>
                    <Title text={"Resumo"} />
                    <div className="max-w-150 mx-4 flex flex-col gap-4 text-bg">
                        {documentToReactComponents(summary)}
                    </div>

                    <Title text={"Bolsistas"} />
                    <div className="flex flex-col gap-4 mx-4 text-bg">
                        {documentToReactComponents(bursers)}
                    </div>
                </section>
                <ProjectMenu id={id} />
            </div>
        </main>
    );
}
