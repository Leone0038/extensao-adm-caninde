"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchInterface() {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearch = (term: string): void => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("search", term);
        } else {
            params.delete("search");
        }
        replace(`${pathname}?${params.toString()}`);
    };
    return (
        <div className="">
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Busca"
                autoFocus
                className="placeholder:italic p-4 border-2 shadow border-gray-700 text-black
                 rounded w-full placeholder:text-gray-500"
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
}
