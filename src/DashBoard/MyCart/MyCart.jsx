import { FaTrash } from "react-icons/fa";
import UseCart from "../../hooks/UseCart";
import axios from "axios";
import Swal from "sweetalert2";
import CartCard from "../CartCard/CartCard";


const MyCart = () => {

    const [cart, refetch] = UseCart();
    const price = cart.reduce((sum, item) => { return sum + item.price }, 0)
    const totalPrice = parseFloat(price.toFixed(2));

    const handleItemDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })

            }
        })

    }

    return (
        <div className="my-10">
            <div className="flex justify-between mb-5">
                <h3 className="text-2xl font-bold">Courses Selected: {cart.length}</h3>
                <h3 className="text-2xl font-bold">Price: ${totalPrice}</h3>

            </div>
            <div className="grid md:grid-cols-3 gap-4">
                {cart.map((item, index) => <CartCard handleItemDelete={handleItemDelete} key={index} item={item} ></CartCard>)}
            </div>
        </div >
    );
};

export default MyCart;