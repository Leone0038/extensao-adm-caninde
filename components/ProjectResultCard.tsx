import { ProjectResultCardProps } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectResultCard({ results }: ProjectResultCardProps) {
    return <div className="document-style text-bg">{documentToReactComponents(results)}</div>;
}
