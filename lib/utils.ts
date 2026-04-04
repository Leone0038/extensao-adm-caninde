import { client } from "@/lib/contentful";
import { FilterType } from "@/types";

export const getNews = async (
    search: string = "",
    filter: FilterType = "latest",
) => {
    const response = await client.getEntries({
        content_type: "news",
        query: search,
        order: [filter === "latest" ? "-sys.createdAt" : "sys.createdAt"],
    });
    return response.items;
};

export const getLastestNews = async () => {
    const response = await client.getEntries({
        content_type: "news",
        limit: 3,
        order: ["-sys.createdAt"],
    });
    return response.items;
};

export const getCounter = async () => {
    const response = await client.getEntries({
        content_type: "counter",
    });
    return response.items;
};

export const cleanUrl = (url: string): string => {
    return url.startsWith("//") ? `https:${url}` : url;
};

export const getPhotos = async (projectName: string) => {
    const response = await client.getEntries({
        content_type: "photos",
        query: projectName,
    });
    return response.items;
};
