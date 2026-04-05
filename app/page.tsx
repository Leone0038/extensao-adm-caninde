import DashBoard from "@/components/DashBoard";
import HighLights from "@/components/HighLights";
import NewsList from "@/components/NewsList";
import Presentation from "@/components/Presentation";
import SlideShow from "@/components/SlideShow";
import Title from "@/components/Title";
import { getLastestNews } from "@/lib/utils";

export default async function Home() {
      const news = await getLastestNews();
    return (
        <main className="flex-1 flex flex-col gap-8 justify-evenly">
            <SlideShow />
            <Presentation />
            <DashBoard />
            <Title text="Últimas Notícias" />
            <NewsList news={news} />
            <Title text=" Bolsistas em Destaque" />
            <HighLights />
        </main>
    );
}
