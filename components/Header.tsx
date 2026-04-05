import logoHeader from "@/assets/logo-header-2.webp";
import NavBar from "./NavBar";
import Image from "next/image";
import fbIcon from "@/assets/fb-icon.svg";
import instaIcon from "@/assets/insta-icon.svg";
import ytIcon from "@/assets/yt-icon.svg";
import Link from "next/link";

import Logo from "./Logo";

export default function Header() {
    return (
        <header className="bg-primary py-4 px-8 flex justify-between gap-6 items-center xl:flex-row flex-col z-50 shadow-sm shadow-gray-800">
            <Logo height={50} width={50} img={logoHeader} />

            <div className="flex gap-10 items-center *:shrink-0 xl:flex-row flex-col">
                <div className="flex gap-8 flex-wrap justify-center">
                    <Link href={""}>
                        <Image
                            width={40}
                            height={40}
                            src={fbIcon}
                            alt="Ícone do Facebook"
                            priority
                        />
                    </Link>
                    <Link href={""}>
                        <Image
                            width={40}
                            height={40}
                            src={instaIcon}
                            alt="Ícone do Instagram"
                            priority
                        />
                    </Link>
                    <Link href={""}>
                        <Image
                            width={40}
                            height={40}
                            src={ytIcon}
                            alt="Ícone do Youtube"
                            priority
                        />
                    </Link>
                </div>
                <NavBar />
            </div>
        </header>
    );
}
