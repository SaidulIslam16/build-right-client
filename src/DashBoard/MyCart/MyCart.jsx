import { FaTrash } from "react-icons/fa";
import UseCart from "../../hooks/UseCart";


const MyCart = () => {

    const [cart] = UseCart();

    const price = cart.reduce((sum, item) => { return sum + item.price }, 0)

    const totalPrice = parseFloat(price.toFixed(2));

    return (
        <div className="my-10">
            <div className="flex justify-between mb-5">
                <h3 className="text-2xl font-bold">Courses Selected: {cart.length}</h3>
                <h3 className="text-2xl font-bold">Price: ${totalPrice}</h3>
                <button className="btn btn-warning">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#
                            </th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            // Use CartRow component to render each item
                            < tr key={index} >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.instructor_name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button className="btn btn-error"><FaTrash></FaTrash> </button>
                                </th>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
        </div >
    );
};

export default MyCart;