import { AboutInfoCardProps } from "@/types";

export default function AboutInfoCard({ children,  title }: AboutInfoCardProps) {
    return (
        <article className="text-primary p-2 flex flex-col gap-4 w-1/2 text-center border-b border-primary">
            <h2 className="h2-common-styles">{title}</h2>
            <div className="[&_a]:underline flex flex-col gap-2 justify-center">{children}</div>
        </article>
    );
}
