import { VideoLinkProps } from "@/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function VideoLinks({ videoLinks }: VideoLinkProps) {
    return (
        <div className="[&_a]:underline p-4 break-all flex flex-col gap-4 text-bg">
            {documentToReactComponents(videoLinks)}
        </div>
    );
}
