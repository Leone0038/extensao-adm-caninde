"use client";

import Image from "next/image";
import { useFormStatus } from "react-dom";
import deleteIcon from "@/assets/delete.svg";
import loadingIcon from "@/assets/loading-black.svg";
import { useActionState, useEffect, useState } from "react";
import { deleteComment } from "@/lib/actions";
import { initialState } from "./CommentForm";
import toast from "react-hot-toast";

const allowedIndexes = [0, 1, 2, 3];

export const SubmitBtn = ({ index }: { index: number }) => {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className="cursor-pointer w-12 h-12">
            {pending ? (
                <Image
                    width={48}
                    height={48}
                    className="w-full h-full shrink-0 object-contain"
                    alt="Loading icon"
                    src={loadingIcon}
                    priority={allowedIndexes.includes(index)}
                />
            ) : (
                <Image
                    width={48}
                    height={48}
                    className="w-full h-full shrink-0 object-contain"
                    alt="Delete icon"
                    src={deleteIcon}
                    priority={allowedIndexes.includes(index)}
                />
            )}
        </button>
    );
};

export default function DeleteCommentForm({
    id,
    index,
}: {
    index: number;
    id: string;
}) {
    const [state, formAction] = useActionState(deleteComment, initialState);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        const changeToClient = () => {
            setIsClient(true);
        };
        const handleDeleteComment = () => {
            switch (state.messageType) {
                case "delete-comment-success":
                    toast.success("Comentário removido com sucesso");
                    break;
                case "delete-comment-error":
                    toast.error(state.errorMessage!);
                    break;

                default:
                    const unexpectedValue = state.messageType as never;
                    console.log(unexpectedValue);
                    break;
            }
        };

        changeToClient();
        handleDeleteComment();
    }, [state.errorMessage, state.messageType]);
    return (
        <form action={formAction} className="absolute top-1 right-1">
            <input type="hidden" name="id" value={id} />
            {isClient && <SubmitBtn index={index} />}
        </form>
    );
}
