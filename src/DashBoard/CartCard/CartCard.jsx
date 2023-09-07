import { Link } from "react-router-dom";

const CartCard = ({ item, handleItemDelete }) => {
    const { _id, name, image, instructor_name, price } = item;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="course images" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor name: <span className="font-bold">{instructor_name}</span></p>
                <div className="card-actions justify-end mt-4">
                    <p className="text-xl font-bold">${price}</p>
                    <button onClick={() => handleItemDelete(_id)} className="btn btn-error">Delete</button>
                    <Link to='/dashboard/payment'><button className="btn btn-warning">Pay</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CartCard;