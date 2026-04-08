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
            <article className="border-b flex sm:flex-row flex-col gap-4 p-2">
                <Image
                    width={48}
                    height={48}
                    alt="Comentário"
                    src={commentIcon}
                    className="w-12 h-12 shrink-0 self-start"
                    priority={allowedIndexes.includes(index)}
                />
                <div className="flex flex-col gap-4 px-4 min-w-0 w-full overflow-hidden">
                    <h2 className="h2-common-styles break-all sm:wrap-break-word">
                        {title}
                    </h2>
                    <p className="p-2 break-all sm:wrap-break-word whitespace-pre-wrap">
                        {comment}
                    </p>
                    <p className="font-bold italic">{timeAgo}</p>
                </div>
            </article>
        </li>
    );
}
