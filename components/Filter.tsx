"use client";
import { FilterType } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

export default function Filter() {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const formRef = useRef<HTMLFormElement>(null);

    const handleFilter = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams);
        const filter = new FormData(e.currentTarget).get(
            "filter",
        ) as FilterType;
        params.set("filter", filter);

        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <form
            className="text-black flex sm:flex-row flex-col gap-4 items-center *:cursor-pointer"
            onSubmit={handleFilter}
            ref={formRef}
        >
            <input
                type="radio"
                name="filter"
                id="latest"
                value="latest"
                defaultChecked
            />
            <label htmlFor="latest">Mais recente</label>
            <input type="radio" name="filter" id="oldest" value="oldest" />
            <label htmlFor="oldest">Mais antiga</label>
            <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded disabled:opacity-5"
            >
                Filtrar
            </button>
        </form>
    );
}
