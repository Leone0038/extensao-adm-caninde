"use server";

import { InitialStateType } from "@/types";
import z from "zod";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export const getComments = async () => {
    const comments = await prisma.comment.findMany({
        orderBy: { createdAt: "desc" },
    });
    return comments;
};

export const postComment = async (
    prevState: unknown,
    formData: FormData,
): Promise<InitialStateType> => {
    const honeypot = formData.get("website_url") as string;

    if (honeypot) {
        return {
            messageType: "add-comment-error",
            errorMessage: "Erro no processamento.",
        };
    }
    const comment = {
        title: formData.get("title") as string,
        comment: formData.get("comment") as string,
    };

    const CommentSchema = z.object({
        title: z
            .string()
            .trim()
            .min(3, "Mínimo de 3 caracteres para o título.")
            .max(100, "Máximo de 100 caracteres para o comentário."),
        comment: z
            .string()
            .trim()
            .min(10, "Mínimo de 10 caracteres para o comentário.")
            .max(1000, "Máximo de 1000 caracteres para o comentário."),
    });

    try {
        const validated = CommentSchema.safeParse(comment);

        if (!validated.success) {
            const errorMessage = validated.error.message;
            return { messageType: "add-comment-error", errorMessage };
        }

        const headersList = await headers();

        const forwardedFor = headersList.get("x-forwarded-for");

        const ip = forwardedFor
            ? forwardedFor.split(",")[0].replace("::ffff:", "")
            : "127.0.0.1";

        const lastComment = await prisma.comment.findFirst({
            where: { userIp: ip },
            orderBy: { createdAt: "desc" },
        });

        if (
            lastComment &&
            Date.now() - lastComment.createdAt.getTime() < 30000
        ) {
            return {
                messageType: "add-comment-error",
                errorMessage: "Por favor, espere 30 segundos.",
            };
        }

        await prisma.comment.create({ data: { ...comment, userIp: ip } });
        revalidatePath("/");

        return { messageType: "add-comment-success" };
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "There was an error";
        console.error(error);
        return { messageType: "add-comment-error", errorMessage };
    }
};

export const deleteComment = async (
    prevState: unknown,
    formData: FormData,
): Promise<InitialStateType> => {
    const id = formData.get("id") as string;
    try {
        await prisma.comment.delete({ where: { id } });
        revalidatePath("/admin");
        revalidatePath("/");
        return { messageType: "delete-comment-success" };
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "There was an error";
        console.error(error);
        return { messageType: "delete-comment-error", errorMessage };
    }
};

export const redirectToAdminPage = async (
    prevState: unknown,
    formData: FormData,
): Promise<InitialStateType> => {
    const adminKey = formData.get("admin-key") as string;
    if (adminKey === process.env.ADMIN_KEY) {
        const cookieStore = await cookies();

        cookieStore.set("admin_session", "true", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24,
            path: "/",
        });
        redirect("/admin");
    }
    return { messageType: "login-error", errorMessage: "Senha incorreta" };
};

export const logout = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
    redirect("/login");
};
