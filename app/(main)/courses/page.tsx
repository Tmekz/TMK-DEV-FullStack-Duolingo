import { getCourses } from "@/DB/queries";
import { List } from "./list";

const CoursesPage = async () => {
  const coursesData = await getCourses();

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto ">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>{" "}
      <List courses={coursesData} activeCourseId={1} />
    </div>
  );
};
export default CoursesPage;
