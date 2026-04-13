import { ScientificWorkContainerListProps } from "@/types";

import NoItemsNotice from "./NoItemsNotice";
import ScientificWorkContainer from "./ScientificWorkContainer";

export default function ScientificWorkContainerList({
    scientificWorks,
}: ScientificWorkContainerListProps) {
    let processesedScientificWorks;
    if (processesedScientificWorks) {
        processesedScientificWorks = scientificWorks.map((scientificWork, i) => (
            <ScientificWorkContainer
                scientificWorkUrl={scientificWork.fields.file.url}
                key={i}
            />
        ));
    } else {
        processesedScientificWorks = (
            <NoItemsNotice text="Nenhum trabalho científico postado ainda" />
        );
    }
    
    return (
        <ul className="grid grid-cols-1 gap-8 px-4">
            {processesedScientificWorks}
        </ul>
    );
}
