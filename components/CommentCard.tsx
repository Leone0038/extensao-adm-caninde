import Image from "next/image";
import commentIcon from "@/assets/comment.svg";
import { CommentCardProps } from "@/types";
import { getTimeAgo } from "@/lib/utils";

const allowedIndexes = [0, 1, 2];
export default function CommentCard({
    comment,
    title,
    index,
    createdAt,
}: CommentCardProps) {
    const timeAgo = getTimeAgo(createdAt.toString());
    return (
        <li>
            <article className="border-b flex gap-4 p-2">
                <Image
                    width={40}
                    height={40}
                    alt="Comentário"
                    src={commentIcon}
                    className="w-15 h-15 self-start"
                    priority={allowedIndexes.includes(index)}
                />
                <div className="flex flex-col gap-4 px-4">
                    <h2 className="h2-common-styles">{title}</h2>
                    <p className="p-2">{comment}</p>
                    <p className="font-bold italic">{timeAgo}</p>
                </div>
            </article>
        </li>
    );
}
