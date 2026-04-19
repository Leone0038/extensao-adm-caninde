import CommentCardList from "@/components/CommentCardList";
import CommentForm from "@/components/CommentForm";
import SideMenu from "@/components/SideMenu";
import Title from "@/components/Title";
import Image from "next/image";
import newsImage from "@/public/images/news.webp";
import Link from "next/link";

export default async function Home() {
    return (
        <main className="flex-1 flex flex-col sm:items-start items-center gap-8">
            <Title text="Últimas notícias" />
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-12 mb-10 w-full">
                <Link href={"/sobre"} className="lg:col-span-3">
                    <Image
                        width={1024}
                        height={1024}
                        alt="Notícias"
                        src={newsImage}
                        className="w-full h-full"
                        priority={true}
                    />
                </Link>
                <SideMenu />
            </div>
            <div className="flex flex-col gap-4 p-4 max-w-4xl w-full">
                <Title text="Deixe seu comentário sobre os projetos de extensão do curso de Administração" />

                <CommentForm />
                <CommentCardList />
            </div>
        </main>
    );
}
