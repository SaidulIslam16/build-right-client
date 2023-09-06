import { Link } from "react-router-dom";


const CourseCard = ({ course }) => {
    const { name, image, instructor_name, price, available_seats, students } = course;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="course images" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor name: <span className="font-bold">{instructor_name}</span></p>
                <div className="flex justify-between">
                    <p>Available seats: <span className="font-bold">{available_seats}</span></p>
                    <p>Students: <span className="font-bold">{students}</span></p>
                </div>
                <div className="card-actions justify-end mt-4">
                    <p className="text-xl font-bold">${price}</p>
                    <Link className="btn btn-primary">Select</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;