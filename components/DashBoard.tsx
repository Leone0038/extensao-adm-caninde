import { getCounter } from "@/lib/utils";
import { DashBoardCounter } from "@/types";

export default async function DashBoard() {
    const counter = await getCounter();
    const {
        completedCoursesAmount,
        impactedMunicipalitiesAmount,
        membersServedAmount,
    } = counter[0].fields as unknown as DashBoardCounter;
    console.log(counter[0].fields)
    return (
        <section className="bg-secondary p-4 rounded flex gap-2 justify-around font-bold lg:flex-row flex-col">
            <div>
                <p>
                    Nº de participantes atendidos:{" "}
                    <span>{membersServedAmount}</span>
                </p>
            </div>
            <div>
                <p>
                    Nº de cursos realizados:{" "}
                    <span>{completedCoursesAmount}</span>
                </p>
            </div>
            <div>
                <p>
                    Nº de municípios impactados:{" "}
                    <span>{impactedMunicipalitiesAmount}</span>
                </p>
            </div>
        </section>
    );
}
