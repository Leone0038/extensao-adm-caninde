import CommentCard from "@/components/CommentCard";
import DeleteCommentForm from "@/components/DeleteCommentForm";
import LogoutForm from "@/components/LogoutForm";
import NoItemsNotice from "@/components/NoItemsNotice";
import Title from "@/components/Title";
import { getComments } from "@/lib/actions";
import { Comment } from "@prisma/client";

export default async function AdminPage() {
    const comments = await getComments();
    const processedComments =
        comments.length === 0 ? (
            <NoItemsNotice text="Nenhum comentário para remover" />
        ) : (
            comments.map((comment: Comment, i) => (
                <div key={i} className="relative">
                    <CommentCard {...comment} index={i} />
                    <DeleteCommentForm id={comment.id} index={i} />
                </div>
            ))
        );
    return (
        <main className="flex-1 flex flex-col">
            <div className="flex sm:flex-row flex-col gap-4 justify-between items-center">
                <Title text="Admin Dashboard" styles="w-fit" />
                <LogoutForm />
            </div>
            <ul className="p-8 max-w-4xl">{processedComments}</ul>
        </main>
    );
}
