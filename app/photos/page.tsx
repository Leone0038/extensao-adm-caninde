import PhotoList from "@/components/PhotoList";
import Title from "@/components/Title";
import { getPhotos } from "@/lib/utils";

export default async function PhotosPage() {
    const financialLiteracyPhotos = await getPhotos(
        "Alfabetização Financeira e Ciência Cidadã",
    );
    const countryFinancingPhotos = await getPhotos("Do Campo às Finanças");
    return (
        <main className="flex flex-col gap-4">
            <Title text="Alfabetização Financeira e Ciência Cidadã" />
            <PhotoList photos={financialLiteracyPhotos} />
            <Title text="Do Campo às Finanças" />
            <PhotoList photos={countryFinancingPhotos} />
        </main>
    );
}
