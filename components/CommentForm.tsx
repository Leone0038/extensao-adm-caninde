"use client";
import { postComment } from "@/lib/actions";
import { InitialStateType } from "@/types";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = ({
    isCommentValid,
    isTitleValid,
}: {
    isCommentValid: boolean;
    isTitleValid: boolean;
}) => {
    const { pending } = useFormStatus();
    const isDisabled = Boolean(pending || !isCommentValid || !isTitleValid);

    return (
        <button
            type="submit"
            disabled={isDisabled}
            className="bg-secondary p-2 rounded cursor-pointer self-start w-25 hover:bg-green-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? "Enviando" : "Enviar"}
        </button>
    );
};
const inputStyles =
    "p-2 border rounded placeholder:text-gray-500 placeholder:italic bg-white text-black w-full min-w-0";

export const initialState: InitialStateType = {
    messageType: null,
};

export default function CommentForm() {
    const [state, formAction] = useActionState(postComment, initialState);
    const [comment, setComment] = useState("");
    const [title, setTitle] = useState("");
    const [isClient, setIsClient] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleTextAreaEnterKey = (
        e: React.KeyboardEvent<HTMLTextAreaElement>,
    ) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            formRef.current?.requestSubmit();
        }
    };

    const isCommentValid = comment.trim().length >= 10;
    const isTitleValid = title.trim().length >= 3;

    useEffect(() => {
        const changeToClient = () => {
            setIsClient(true);
        };
        changeToClient();
    }, []);

    useEffect(() => {
        const handleAddComment = () => {
            if (state.messageType === "add-comment-error") {
                toast.error(state.errorMessage!);
            } else if (state.messageType === "add-comment-success") {
                toast.success("Comentário postado com sucesso");
                setTitle("");
                setComment("");
            }
        };
        handleAddComment();
    }, [state.messageType, state.errorMessage]);

    return (
        <form
            action={formAction}
            className="flex flex-col gap-4 w-full"
            ref={formRef}
        >
            <p className="text-xs text-gray-500">Mínimo 3 caracteres *</p>

            <input
                type="text"
                name="title"
                placeholder="Título"
                className={inputStyles}
                required
                minLength={3}
                maxLength={100}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <p className="text-xs text-gray-500">Mínimo 10 caracteres *</p>
            <textarea
                name="comment"
                placeholder="Comentário"
                rows={10}
                className={`${inputStyles} resize-none`}
                required
                minLength={10}
                maxLength={1000}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={handleTextAreaEnterKey}
            />
            {isClient && (
                <SubmitBtn
                    isCommentValid={isCommentValid}
                    isTitleValid={isTitleValid}
                />
            )}
        </form>
    );
}
