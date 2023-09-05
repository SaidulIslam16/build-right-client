import PopularCourses from "../PopularCourses/PopularCourses";
import Stats from "../Stats/Stats";
import TopHeader from "../TopHeader/TopHeader";
import TopInstructors from "../TopInstructors/TopInstructors";

const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <PopularCourses></PopularCourses>
            <TopInstructors></TopInstructors>
            <Stats></Stats>
        </div>
    );
};

export default Home;