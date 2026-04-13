import { PhotoListProps } from "@/types";
import PhotoCard from "./PhotoCard";
import NoItemsNotice from "./NoItemsNotice";

export default function PhotoList({ photos }: PhotoListProps) {
    let processedPhotos;
    if (photos) {
        processedPhotos = photos?.map((photoUrl, i) => (
            <PhotoCard photoUrl={photoUrl.fields.file.url} index={i} key={i} />
        ));
    } else {
        processedPhotos = <NoItemsNotice text="Nenhuma foto postada ainda" />;
    }
  
    return <ul className="grid-common-styles mx-4">{processedPhotos}</ul>;
}
