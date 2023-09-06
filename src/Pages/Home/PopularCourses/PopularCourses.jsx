import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CourseCard from "../../../Shared/CourseCard/CourseCard";
import axios from "axios";

const PopularCourses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/classes')
            .then(response => setCourses(response.data))
    }, [])

    courses.sort((a, b) => b.students - a.students);
    const popularCourses = courses.slice(0, 6);


    return (

        <section className="my-10 md:max-w-7xl mx-auto">
            <SectionTitle heading='Popular Courses' subHeading="Explore Our"></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    popularCourses.map((course, i) => <CourseCard key={i} course={course}></CourseCard>)
                }
            </div>

        </section>
    );
};

export default PopularCourses;