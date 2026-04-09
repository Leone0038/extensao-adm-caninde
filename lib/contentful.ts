import { FilterType, Project } from "@/types";
import { createClient } from "contentful";

export const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
});


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



export const getProjects = async () => {
    const response = await client.getEntries({
        content_type: "project",
    });

    return response.items;
};

export const getSingleProject = async (id: string) => {
    const response = await client.getEntry(id);

    return response.fields as unknown as Promise<Project>;
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
