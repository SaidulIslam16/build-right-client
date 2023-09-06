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


    return (

        <section className="my-10 md:max-w-7xl mx-auto">
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