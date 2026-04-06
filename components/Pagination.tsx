"use client";

import { PaginationProps } from "@/types";
import Link from "next/link";
import leftArrow from "@/assets/left-arrow.svg";
import rightArrow from "@/assets/right-arrow.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";

export default function Pagination({
    currentPage,
    totalPages,
}: PaginationProps) {
    const router = useRouter();
    const handlePageClick = (event: { selected: number }) => {
        const page = event.selected + 1;
        router.push(`/news?page=${page}`);
    };
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Próxima >"
            onPageChange={handlePageClick}
            pageCount={20}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            previousLabel="< Anterior"
            forcePage={currentPage}
            containerClassName="flex justify-center items-center select-none flex-wrap"
            pageClassName="w-25 h-15 bg-primary border"
            pageLinkClassName="w-full h-full cursor-pointer p-2 grid place-content-center"
            nextClassName="w-25 h-15 bg-primary border rounded-r-lg"
            nextLinkClassName="w-full h-full cursor-pointer p-2 grid place-content-center"
            previousClassName="w-25 h-15 bg-primary border rounded-l-lg"
            previousLinkClassName="w-full h-full cursor-pointer p-2 grid place-content-center"
            disabledClassName="opacity-50"
            disabledLinkClassName="!cursor-not-allowed"
            activeClassName="opacity-85 border-white" 
            breakLinkClassName="w-full h-full cursor-default p-2 grid place-content-center"
            breakClassName="w-25 h-15 bg-primary border"
        />
    );
}
