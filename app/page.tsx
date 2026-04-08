import CommentCardList from "@/components/CommentCardList";
import CommentForm from "@/components/CommentForm";
import Presentation from "@/components/Presentation";
import SideMenu from "@/components/SideMenu";
import Title from "@/components/Title";

export default async function Home() {
    return (
        <main className="flex flex-col items-center">
            <Title text="Sobre os Projetos de Extensão" styles="w-fit" />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mb-10">
                <Presentation />
                <SideMenu />
            </div>
            <Title
                text="Deixe seu comentário sobre os projetos de extensão do curso de Administração"
                styles="w-fit"
                
            />
            <div className="flex flex-col gap-4 p-8 max-w-2xl w-full">
                <CommentForm />
                <CommentCardList />
            </div>
        </main>
    );
}
