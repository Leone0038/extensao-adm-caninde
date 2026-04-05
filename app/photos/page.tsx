import PhotoList from "@/components/PhotoList";
import Title from "@/components/Title";
import { getPhotos } from "@/lib/utils";

export default async function PhotosPage() {
    const financialLiteracyPhotos = await getPhotos(
        "Alfabetização Financeira e Ciência Cidadã",
    );
    const countryFinancingPhotos = await getPhotos("Do Campo às Finanças");
    return (
        <main className="page-common-styles">
            <Title text="Projeto - Alfabetização Financeira e Ciência Cidadã - Fotos" />
            <PhotoList photos={financialLiteracyPhotos} />
            <Title text="Projeto - Do Campo às Finanças - Fotos" />
            <PhotoList photos={countryFinancingPhotos} />
        </main>
    );
}
