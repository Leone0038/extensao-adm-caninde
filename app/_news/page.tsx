import Filter from "@/components/Filter";
import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";
import SearchInterface from "@/components/SearchInterface";
import Title from "@/components/Title";
import { getNews } from "@/lib/utils";
import { NewsPageSearchParams } from "@/types";

export default async function NewsPage({ searchParams }: NewsPageSearchParams) {
    const { filter, search, page } = await searchParams;
    const currentPage = (Number(page) || 1)
    const postsPerPage = 6;
    const { news, total } = await getNews(
        search,
        filter,
        postsPerPage,
        currentPage,
    );
    const totalPages = Math.ceil(total / postsPerPage);
    return (
        <main className="page-common-styles flex-1">
            <SearchInterface />
            <div className="flex sm:flex-row flex-col justify-between gap-4">
                <Title text="Notícias" />
                <Filter />
            </div>
            <NewsList news={news} />
            <Pagination currentPage={currentPage-1} totalPages={totalPages} />
        </main>
    );
}
