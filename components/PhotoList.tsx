import { PhotoListProps } from "@/types";
import PhotoCard from "./PhotoCard";
import NoItemsNotice from "./NoItemsNotice";

export default function PhotoList({ photos }: PhotoListProps) {
    const photoList = photos.map((photoUrl, i) => {
        return (
            <PhotoCard photoUrl={photoUrl.fields.file.url} index={i} key={i} />
        );
    });
    const processedPhotos =
        photos.length !== 0 ? (
            photoList
        ) : (
            <NoItemsNotice text="Nenhuma foto postada ainda" />
        );
    return <ul className="grid-common-styles mx-4">{processedPhotos}</ul>;
}
