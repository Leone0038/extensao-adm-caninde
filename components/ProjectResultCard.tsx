import { ProjectResultCardProps } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import NoItemsNotice from "./NoItemsNotice";

export default function ProjectResultCard({ results }: ProjectResultCardProps) {
    if (!results) {
        return <NoItemsNotice text="Nenhum resultado postado ainda" />
    }
    return <div className="document-style text-bg">{documentToReactComponents(results)}</div>;
}
