import { WorkShopCardListProps, WorkShopCardProps } from "@/types";
import WorkShopCard from "./WorkShopCard";
import NoItemsNotice from "./NoItemsNotice";

export default function WorkShopCardList({ workshops }: WorkShopCardListProps) {
    const typedWorkShops = workshops.map(({ fields, sys }) => {
        const { image, description, workshopName } =
            fields as unknown as WorkShopCardProps;
        const { id, createdAt } = sys;
        return { id, workshopName, createdAt, description, image };
    });
    const workshopsList = typedWorkShops.map((workshop, i) => (
        <WorkShopCard {...workshop} key={workshop.id} index={i} />
    ));
    const processesedWorkShops =
        workshops.length !== 0 ? (
            workshopsList
        ) : (
            <NoItemsNotice text="Nenhuma oficina postada ainda" />
        );
    return <ul className="grid-common-styles">{processesedWorkShops}</ul>;
}
