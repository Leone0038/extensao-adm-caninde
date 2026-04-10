"use client";

import { redirectToAdminPage } from "@/lib/actions";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { initialState } from "./CommentForm";
import toast from "react-hot-toast";

export const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="cursor-pointer bg-primary p-2 rounded self-start w-30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? "Logging in" : "Login"}
        </button>
    );
};

export default function LoginForm() {
    const [state, formAction] = useActionState(
        redirectToAdminPage,
        initialState,
    );

    useEffect(() => {
        const handleLogin = () => {
            switch (state.messageType) {
                case "login-error":
                    toast.error(state.errorMessage!);
                    break;

                default:
                    const unexpectedValue = state.messageType as never;
                    console.log(unexpectedValue);
                    break;
            }
        };
        handleLogin();
    }, [state.errorMessage, state.messageType]);
    return (
        <form action={formAction} className="flex flex-col gap-4">
            <input
                type="password"
                name="admin-key"
                placeholder="Admin key"
                className="placeholder:italic placeholder:text-gray-500 bg-white border rounded p-2 text-black"
            />
            <SubmitBtn />
        </form>
    );
}
