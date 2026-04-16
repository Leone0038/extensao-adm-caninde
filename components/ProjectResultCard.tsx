import { ProjectResultCardProps } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectResultCard({ results }: ProjectResultCardProps) {
    return <div className="[&_a]:underline break-all w-4/5 p-4 flex flex-col gap-4 text-bg">{documentToReactComponents(results)}</div>;
}
