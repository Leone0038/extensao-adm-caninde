import Presentation from "@/components/Presentation";
import SideMenu from "@/components/SideMenu";
export default async function Home() {
    return (
        <main>
            <div className="grid grid-cols-3 gap-12">
                <Presentation />
                <SideMenu />
            </div>
        </main>
    );
}
