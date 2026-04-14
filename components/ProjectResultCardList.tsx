import {  ProjectResultCardListProps } from "@/types";
import NoItemsNotice from "./NoItemsNotice";
import ProjectResultCard from "./ProjectResultCard";

export default function ProjectResultCardList({ results }: ProjectResultCardListProps) {
    let processesedResults;
    if (results) {
        processesedResults = results.map((result, i) => (
            <ProjectResultCard  resultUrl={result.fields.file.url} key={i} />
        ));
    } else {
        processesedResults = <NoItemsNotice text="Nenhum resultado postado ainda" />;
    }
 
   
    return <ul className="grid grid-cols-1 gap-8 px-4">{processesedResults}</ul>;
}
