"use client";
import { postComment } from "@/lib/actions";
import { InitialStateType } from "@/types";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-secondary p-2 rounded cursor-pointer self-start w-20 hover:bg-green-900"
        >
            {pending ? "Enviando" : "Enviar"}
        </button>
    );
};
const inputStyles =
    "p-2 border rounded placeholder:text-gray-500 placeholder:italic bg-white text-black";

const initialState: InitialStateType = {
    message: null,
};

export default function CommentForm() {
    const [state, formAction] = useActionState(postComment, initialState);

    useEffect(() => {
        console.log(state.errorMessage)
        if (state.message === "add-comment-error") {
            toast.error("Ocorreu um erro ao tentar postar o comentário");
        } else if (state.message === "add-comment-success") {
            toast.success("Comentário postado com sucesso");
        }
    }, [state.message, state.errorMessage]);

    return (
        <form action={formAction} className="flex flex-col gap-4">
            <input
                type="text"
                name="title"
                placeholder="Título"
                className={inputStyles}
                required
            />
            <textarea
                name="comment"
                placeholder="Comentário"
                rows={10}
                className={`${inputStyles} resize-none`}
                required
            />
            <SubmitBtn />
        </form>
    );
}
