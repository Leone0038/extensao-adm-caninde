import {
    TopScholarshipRecipientCardListProps,
    TopScholarshipRecipientCardProps,
} from "@/types";
import TopScholarshipRecipientCard from "./TopScholarshipRecipientCard";
import NoItemsNotice from "./NoItemsNotice";

export default function TopScholarshipRecipientCardList({
    topScholarshipRecipients,
}: TopScholarshipRecipientCardListProps) {
    const typedTopScholarshipRecipients = topScholarshipRecipients.map(
        ({ fields, sys }) => {
            const { name, description } =
                fields as unknown as TopScholarshipRecipientCardProps;
            const { id, createdAt } = sys;
            return { id, name, createdAt, description };
        },
    );
    const topScholarshipRecipientsList = typedTopScholarshipRecipients.map(
        (topScholarshipRecipient) => (
            <TopScholarshipRecipientCard
                {...topScholarshipRecipient}
                key={topScholarshipRecipient.id}
            />
        ),
    );
    const processesedTopScholarshipRecipients =
        topScholarshipRecipients.length !== 0 ? (
            topScholarshipRecipientsList
        ) : (
            <NoItemsNotice text="Nenhum bolsista em destaque postado ainda" />
        );
    return (
        <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 p-4">
            {processesedTopScholarshipRecipients}
        </ul>
    );
}
