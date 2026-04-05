import {  ScientificWorkContainerListProps, ScientificWorkContainerProps } from "@/types";

import NoItemsNotice from "./NoItemsNotice";
import ScientificWorkContainer from "./ScientificWorkContainer";

export default function ScientificWorkContainerList({
    scientificWorks,
}: ScientificWorkContainerListProps) {
    const typedScientificWorks = scientificWorks.map(({ fields, sys }) => {
        const { scientificWorkPdf } = fields as unknown as ScientificWorkContainerProps;
        const { id } = sys;
        console.log(scientificWorkPdf)
        return { id, scientificWorkPdf };
    });
    const scientificWorkList = typedScientificWorks.map(({id,scientificWorkPdf}) => (
        <ScientificWorkContainer scientificWorkPdf={scientificWorkPdf} key={id} />
    ));
    const processesedScientificWorks =
        scientificWorks.length !== 0 ? (
            scientificWorkList
        ) : (
            <NoItemsNotice text="Nenhum trabalho científico postado ainda" />
        );
    return <ul className="grid grid-cols-1 gap-4 p-4">{processesedScientificWorks}</ul>;
}
