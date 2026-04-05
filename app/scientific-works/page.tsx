import ScientificWorkContainerList from "@/components/ScientificWorkContainerList";
import Title from "@/components/Title";
import { getScientificWorks } from "@/lib/utils";

export default async function ScientificWorksPage() {
    const scientificWorks = await getScientificWorks();
    return (
        <main className="flex-1 flex flex-col gap-4">
            <Title text="Trabalhos Científicos" />
            <ScientificWorkContainerList scientificWorks={scientificWorks} />
        </main>
    );
}
