import Swal from "sweetalert2";
import useAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import UseCart from "../../hooks/UseCart";

const CourseCard = ({ course }) => {

    const navigate = useNavigate();
    const { user } = useAuth();
    const locatoin = useLocation();
    const [, refetch] = UseCart();

    const { _id, name, image, instructor_name, price, available_seats, students } = course;

    const handleAddToCart = course => {

        if (!user?.email) {
            Swal.fire({
                title: 'Please Login for Add to Cart?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: locatoin } })
                }
            })
        }
        else {
            const classInfo = { courseId: _id, name, image, instructor_name, price, email: user.email }

            console.log(classInfo);

            axios.post('http://localhost:5000/cart', classInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Added to your List',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        refetch();
                    }
                })

        }
    }

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
                    <button onClick={() => handleAddToCart(course)} className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;