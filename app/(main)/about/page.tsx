import BreadCrumbs from "@/components/BreadCrumbs";
import Presentation from "@/components/Presentation";
import Title from "@/components/Title";

export default function AboutPage() {
    return (
        <main className="flex-1 page-common-styles items-start">
            <BreadCrumbs/>
            <Title text="Sobre o site" styles="mb-6"/>
            <Presentation/>
        </main>
    );
}
