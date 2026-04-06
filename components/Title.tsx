import { TitleProps } from "@/types";

export default function Title({ text }: TitleProps) {
    return (
        <h2
            className={`text-2xl font-bold bg-primary p-4 rounded self-start`}
        >
            {text}
        </h2>
    );
}
