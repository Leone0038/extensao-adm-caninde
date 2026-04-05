import { TopScholarshipRecipientCardProps } from "@/types";

export default function TopScholarshipRecipientCard({
    description,
    name,
}: TopScholarshipRecipientCardProps) {
    return (
        <li>
            <article className="card-common-styles flex flex-col gap-4 h-full">
                <h2 className="h2-common-styles">{name}</h2>
                <p className="">{description}</p>
            </article>
        </li>
    );
}
