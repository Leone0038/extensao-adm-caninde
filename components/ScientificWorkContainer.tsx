import { cleanUrl } from "@/lib/utils";
import {  ScientificWorkContainerProps } from "@/types";

export default function ScientificWorkContainer({
    scientificWorkPdf,
    author,
    createdAt
}: ScientificWorkContainerProps) {
    const scientificWorkUrl = cleanUrl(scientificWorkPdf.fields.file.url);
    return (
        <li>
            <object
                data={scientificWorkUrl}
                type="application/pdf"
                width="100%"
                height="800px"
            >
                <p className="p-4 bg-gray-100 rounded">
                    Seu navegador não consegue exibir o PDF.
                    <a
                        href={scientificWorkUrl}
                        className="text-blue-600 underline"
                    >
                        {" "}
                        Clique aqui para baixar.
                    </a>
                </p>
            </object>
        </li>
    );
}
