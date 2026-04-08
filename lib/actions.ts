"use server";

import { InitialStateType } from "@/types";
import z from "zod";
import prisma from "./db";
import { revalidatePath } from "next/cache";

export const getComments = async () => {
    const comments = await prisma.comment.findMany({orderBy: {createdAt: 'desc'}});
    return comments;
};

export const postComment = async (
    prevState: unknown,
    formData: FormData,
): Promise<InitialStateType> => {
    const comment = {
        title: formData.get("title") as string,
        comment: formData.get("comment") as string,
    };

    const commentSchema = z.object({
        title: z.string(),
        comment: z.string(),
    });

    try {
        commentSchema.parse(comment);

        await prisma.comment.create({ data: { ...comment } });
        revalidatePath("/");

        return { message: "add-comment-success" };
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "There was an error";
        return { message: "add-comment-error", errorMessage };
    }
};
