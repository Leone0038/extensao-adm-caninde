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
        <main className="page-common-styles flex-1">
            <SearchInterface />
            <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center gap-4">
                <Title text="Notícias" styles="self-center"/>
                <Filter />
            </div>
            <NewsList news={news} />
        </main>
    );
}
