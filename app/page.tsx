// import CommonLink from "@/components/CommonLink";
import Presentation from "@/components/Presentation";
import SlideShow from "@/components/SlideShow";

export default function Home() {
    return (
        <main className="flex-1 flex flex-col items-center gap-8 justify-evenly">
            <SlideShow />
            {/* <div className="flex gap-4">
                <CommonLink href="/projeto-1" label="Conheça o Projeto - 1" />
                <CommonLink
                    href="/cursos-e-oficinas"
                    label="Inscreva-se nos cursos"
                />
            </div> */}
            <Presentation/>
        </main>
    );
}
