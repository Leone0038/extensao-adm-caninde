import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import { Toaster } from "react-hot-toast";

export default function Providers({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Toaster />
            <ScrollToTopBtn />
            {children}
        </>
    );
}
