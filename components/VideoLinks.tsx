import { VideoLinkProps } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function VideoLinks({ videoLinks }: VideoLinkProps) {
    return (
        <div className="document-style text-bg">
            {documentToReactComponents(videoLinks)}
        </div>
    );
}
