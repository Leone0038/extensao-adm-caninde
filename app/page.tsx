import CommentCardList from "@/components/CommentCardList";
import CommentForm from "@/components/CommentForm";
import Presentation from "@/components/Presentation";
import SideMenu from "@/components/SideMenu";
import Title from "@/components/Title";

export default async function Home() {
    return (
        <main className="flex flex-col sm:items-start items-center gap-8">
            <Title text="Sobre o Site"/>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mb-10">
                <Presentation />
                <SideMenu />
            </div>
            <div className="flex flex-col gap-4 p-4 max-w-4xl w-full">
                <Title
                    text="Deixe seu comentário sobre os projetos de extensão do curso de Administração"
                />

                <CommentForm />
                <CommentCardList />
            </div>
        </main>
    );
}
