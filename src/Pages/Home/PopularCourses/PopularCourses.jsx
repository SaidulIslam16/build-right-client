import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CourseCard from "../../../Shared/CourseCard/CourseCard";

const PopularCourses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (

        <section className="my-10">
            <SectionTitle heading='Popular Courses' subHeading="Explore Our"></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    courses.map((course, i) => <CourseCard key={i} course={course}></CourseCard>)
                }
            </div>

        </section>
    );
};

export default PopularCourses;