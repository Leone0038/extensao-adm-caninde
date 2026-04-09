import {  ProjectResultCardListProps } from "@/types";
import NoItemsNotice from "./NoItemsNotice";
import ProjectResultCard from "./ProjectResultCard";

export default function ProjectResultCardList({ results }: ProjectResultCardListProps) {
 
    const resultsList = results.map((result, i) => (
        <ProjectResultCard  resultUrl={result.fields.file.url} key={i} />
    ));
    const processesedResults =
        results.length !== 0 ? (
            resultsList
        ) : (
            <NoItemsNotice text="Nenhum projeto postado ainda" />
        );
    return <ul className="grid grid-cols-1 gap-8 px-4">{processesedResults}</ul>;
}
