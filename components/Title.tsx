import { TitleProps } from "@/types";

export default function Title({ text, align }: TitleProps) {
    return (
        <h2
            className={`text-2xl font-bold bg-primary p-4 rounded self-${align ? align: "start"}`}
        >
            {text}
        </h2>
    );
}
