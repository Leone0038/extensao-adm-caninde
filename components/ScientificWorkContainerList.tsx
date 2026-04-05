import {
    ScientificWorkContainerListProps,
    ScientificWorkContainerProps,
} from "@/types";

import NoItemsNotice from "./NoItemsNotice";
import ScientificWorkContainer from "./ScientificWorkContainer";

export default function ScientificWorkContainerList({
    scientificWorks,
}: ScientificWorkContainerListProps) {
    const typedScientificWorks = scientificWorks.map(({ fields, sys }) => {
        const { scientificWorkPdf, author, description } =
            fields as unknown as ScientificWorkContainerProps;
        const { id, createdAt } = sys;
        return { id, scientificWorkPdf, createdAt, author , description};
    });
    const scientificWorkList = typedScientificWorks.map((scientificWork) => (
        <ScientificWorkContainer {...scientificWork} key={scientificWork.id} />
    ));
    const processesedScientificWorks =
        scientificWorks.length !== 0 ? (
            scientificWorkList
        ) : (
            <NoItemsNotice text="Nenhum trabalho científico postado ainda" />
        );
    return (
        <ul className="grid grid-cols-1 gap-4 p-4">
            {processesedScientificWorks}
        </ul>
    );
}
