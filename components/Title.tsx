import { TitleProps } from "@/types";

export default function Title({ text, styles }: TitleProps) {
    return (
        <h2
            className={`text-2xl secondary-style ${styles}`}
        >
            {text}
        </h2>
    );
}
