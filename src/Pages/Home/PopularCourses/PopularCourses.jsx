import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PopularCourses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])


    return (

        <div>
            <SectionTitle heading='Popular Courses' subHeading="Explore Our"></SectionTitle>
        </div>
    );
};

export default PopularCourses;