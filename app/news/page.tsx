import Filter from "@/components/Filter";
import NewsList from "@/components/NewsList";
import SearchInterface from "@/components/SearchInterface";
import Title from "@/components/Title";
import { getNews } from "@/lib/utils";
import { NewsPageSearchParams } from "@/types";

export default async function NewsPage({ searchParams }: NewsPageSearchParams) {
    const { filter, search } = await searchParams;
    const news = await getNews(search, filter);
    return (
        <main className="flex flex-col gap-4">
            <SearchInterface />
            <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
                <Title text="Notícias" />
                <Filter />
            </div>
            <NewsList news={news} />
        </main>
    );
}
