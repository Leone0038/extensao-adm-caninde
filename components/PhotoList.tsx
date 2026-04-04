import { PhotoCardProps, PhotoListProps } from "@/types";
import PhotoCard from "./PhotoCard";

export default function PhotoList({ photos }: PhotoListProps) {
    const typedPhotos = photos.map(({ fields, sys }) => {
        const { description, image, title, projectName } =
            fields as unknown as PhotoCardProps;
        const { id } = sys;
        return { id, title, description, image, projectName };
    });
    const photoList = typedPhotos.map((photo, i) => (
        <PhotoCard {...photo} key={photo.id} index={i} />
    ));
    const processedPhotos =
        photos.length !== 0 ? (
            photoList
        ) : (
            <p className="text-2xl italic text-gray-500">Nenhuma foto ainda</p>
        );
    return <ul className="p-4 flex gap-4">{processedPhotos}</ul>;
}
