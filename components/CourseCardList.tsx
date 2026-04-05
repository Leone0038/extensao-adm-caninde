import { CourseCardListProps, CourseCardProps } from "@/types";
import CourseCard from "./CourseCard";
import NoItemsNotice from "./NoItemsNotice";

export default function CourseCardList({ courses }: CourseCardListProps) {
    const typedCourses = courses.map(({ fields, sys }) => {
        const { courseName, image, description } =
            fields as unknown as CourseCardProps;
        const { id, createdAt } = sys;
        return { id, courseName, createdAt, description, image };
    });
    const coursesList = typedCourses.map((course, i) => (
        <CourseCard {...course} key={course.id} index={i}/>
    ));
    const processesedCourses =
        courses.length !== 0 ? (
            coursesList
        ) : (
            <NoItemsNotice text="Nenhum curso postado ainda" />
        );
    return <ul className="grid-common-styles">{processesedCourses}</ul>;
}
