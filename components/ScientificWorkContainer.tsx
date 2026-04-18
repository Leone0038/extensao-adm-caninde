import { ScientificWorkContainerProps } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import NoItemsNotice from "./NoItemsNotice";

export default function ScientificWorkContainer({
    scientificWorks,
}: ScientificWorkContainerProps) {
      if (!scientificWorks) {
            return <NoItemsNotice text="Nenhum trabalho científico postado ainda" />
        }
    return <div className="document-style text-bg">{documentToReactComponents(scientificWorks)}</div>;
}
