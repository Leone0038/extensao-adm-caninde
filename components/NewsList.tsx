import NewsCard from "@/components/NewsCard";
import { NewsCardProps, NewsListProps } from "@/types";

export default function NewsList({ news }: NewsListProps) {
    const typedNews = news.map(({ fields, sys }) => {
        const { description, image, title } =
            fields as unknown as NewsCardProps;
        const { id } = sys;
        return { id, title, description, image };
    });
    const newsList = typedNews.map((sNews, i) => (
        <NewsCard {...sNews} key={sNews.id} index={i} />
    ));
    const processedNews =
        news.length !== 0 ? (
            newsList
        ) : (
            <p className="text-2xl italic text-gray-500">
                Nenhuma notícia ainda
            </p>
        );
    return <ul className="flex flex-col gap-4 p-2">{processedNews}</ul>;
}
