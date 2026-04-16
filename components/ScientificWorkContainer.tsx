import { ScientificWorkContainerProps } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ScientificWorkContainer({
    scientificWorks,
}: ScientificWorkContainerProps) {
    return <div className="document-style text-bg">{documentToReactComponents(scientificWorks)}</div>;
}
