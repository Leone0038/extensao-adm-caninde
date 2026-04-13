"use client";

import { logout } from "@/lib/actions";
import { useFormStatus } from "react-dom";

export const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="cursor-pointer text-text-primary bg-red-700 p-2 rounded self-start w-30"
        >
            {pending ? "Logging out" : "Log out"}
        </button>
    );
};

export default function LogoutForm() {
    return (
        <form action={logout}>
            <SubmitBtn />
        </form>
    );
}
