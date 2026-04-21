import { Project } from "@/types";
import { createClient } from "contentful";

export const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
});

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
