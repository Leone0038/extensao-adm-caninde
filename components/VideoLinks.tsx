import { VideoLinkProps } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import NoItemsNotice from "./NoItemsNotice";

export default function VideoLinks({ videoLinks }: VideoLinkProps) {
     if (!videoLinks) {
                return <NoItemsNotice text="Nenhum vídeo postado ainda" />
            }
    return (
        <div className="document-style text-bg">
            {documentToReactComponents(videoLinks)}
        </div>
    );
}
