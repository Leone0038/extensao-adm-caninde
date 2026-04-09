import Image from "next/image";
import loadingSpinner from "@/assets/loading.svg";

export default function loading() {
    return (
        <div className="flex-1 grid place-content-center">
            <Image
                width={100}
                height={100}
                src={loadingSpinner}
                alt="Ícone de carregar"
            />
        </div>
    );
}
