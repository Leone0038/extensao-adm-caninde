import PhotoList from "@/components/PhotoList";
import Title from "@/components/Title";
import { getPhotos } from "@/lib/utils";

export default async function PhotosPage() {
    const photos = await getPhotos();
    return (
        <main className="page-common-styles">
            <Title text="Fotos" />

            <PhotoList photos={photos} />
        </main>
    );
}
