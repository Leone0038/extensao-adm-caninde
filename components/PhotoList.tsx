import { PhotoCardProps, PhotoListProps } from "@/types";
import PhotoCard from "./PhotoCard";
import NoItemsNotice from "./NoItemsNotice";

export default function PhotoList({ photos }: PhotoListProps) {
    const typedPhotos = photos.map(({ fields, sys }) => {
        const { description, image, title } =
            fields as unknown as PhotoCardProps;
        const { id, createdAt } = sys;
        return { id, title, description, image, createdAt };
    });
    const photoList = typedPhotos.map((photo, i) => (
        <PhotoCard {...photo} key={photo.id} index={i} />
    ));
    const processedPhotos =
        photos.length !== 0 ? (
            photoList
        ) : (
            <NoItemsNotice text="Nenhuma foto postada ainda" />
        );
    return (
        <ul className="grid-common-styles">
            {processedPhotos}
        </ul>
    );
}
