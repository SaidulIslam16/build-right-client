import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import axios from "axios";

const UseCart = () => {

    const { user, loading } = useAuth();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: [cart, user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios(`http://localhost:5000/cart?email=${user.email}`)
            return response.data;
        }
    })

    return [cart, refetch]
};

export default UseCart;