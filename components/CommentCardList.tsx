import CommentCard from "./CommentCard";
import NoItemsNotice from "./NoItemsNotice";
import { getComments } from "@/lib/actions";

export default async function CommentCardList() {
    const comments = await getComments();
    const commentsList = comments.map((comment, i) => {
        return <CommentCard {...comment} key={comment.id} index={i} />;
    });

    const processedComments =
        comments.length !== 0 ? (
            commentsList
        ) : (
            <NoItemsNotice text="Nenhum comentário ainda" />
        );
    return (
        <>
        <h2 className="border-b h2-common-styles p-4">{comments.length} - {comments.length === 1 ? 'Comentário': 'Comentários'}</h2>
            <ul className="flex flex-col gap-4">{processedComments}</ul>
        </>
    );
}
