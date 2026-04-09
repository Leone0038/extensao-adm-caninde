import CourseCardList from "@/components/CourseCardList";
import Title from "@/components/Title";
import WorkShopCardList from "@/components/WorkShopCardList";
import { getCourses, getWorkShops } from "@/lib/utils";

export default async function CoursesAndWorkshopsPage() {
    const courses = await getCourses();
    const workshops = await getWorkShops();
    return (
        <main className="page-common-styles">
            <Title text="Cursos" />
            <CourseCardList courses={courses} />
            <Title text="Oficinas" />
            <WorkShopCardList workshops={workshops} />
        </main>
    );
}
