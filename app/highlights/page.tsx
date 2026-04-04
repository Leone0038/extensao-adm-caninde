import DashBoard from "@/components/DashBoard";
import HighLights from "@/components/HighLights";
import NewsList from "@/components/NewsList";
import Title from "@/components/Title";
import { getLastestNews } from "@/lib/utils";

export default async function HighLightsPage() {
    const news = await getLastestNews();

    return (
        <main className="flex flex-col gap-6">
            <DashBoard />
            <Title
                text="Últimas Notícias"
            />
            <NewsList news={news} />
            <HighLights />
        </main>
    );
}
