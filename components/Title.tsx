import { TitleProps } from "@/types";

export default function Title({ text,styles }: TitleProps) {
    return (
        <h2
            className={`text-2xl font-bold bg-secondary text-white p-4 rounded shadow-md ${styles}`}
        >
            {text}
        </h2>
    );
}
