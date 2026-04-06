import { client } from "@/lib/contentful";
import { FilterType } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const getNews = async (
    search: string = "",
    filter: FilterType = "latest",
    limit: number,
    currentPage: number,
) => {
    const response = await client.getEntries({
        content_type: "news",
        query: search,
        order: [filter === "latest" ? "-sys.createdAt" : "sys.createdAt"],
        limit,
        skip: (currentPage - 1) * limit,
    });
    return { news: response.items, total: response.total };
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

export const getPhotos = async () => {
    const response = await client.getEntries({
        content_type: "photos",
    });
    return response.items;
};

export const getVideos = async () => {
    const response = await client.getEntries({
        content_type: "vdeos",
    });
    return response.items;
};

export const getScientificWorks = async () => {
    const response = await client.getEntries({
        content_type: "scientificWork",
    });

    return response.items;
};

export const getTimeAgo = (createdAt: string) => {
    return formatDistanceToNow(createdAt, {
        addSuffix: true,
        locale: ptBR,
    });
};

export const getProjects = async () => {
    const response = await client.getEntries({
        content_type: "project",
    });

    return response.items;
};

export const getCourses = async () => {
    const response = await client.getEntries({
        content_type: "course",
    });

    return response.items;
};

export const getWorkShops = async () => {
    const response = await client.getEntries({
        content_type: "workshop",
    });

    return response.items;
};

export const getTopScholarshipRecipients = async () => {
    const response = await client.getEntries({
        content_type: "topScholarshipRecipient",
    });

    return response.items;
};
