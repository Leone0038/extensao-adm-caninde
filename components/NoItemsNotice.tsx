import { NoItemsNoticeProps } from "@/types";

export default function NoItemsNotice({text}:NoItemsNoticeProps) {
    return <p className="text-2xl italic text-gray-500">{text}</p>;
}
