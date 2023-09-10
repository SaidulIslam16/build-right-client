import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PaymentMethod_PK);
    const location = useLocation();
    const item = location.state.item;
    // console.log(item);
    return (
        <div>
            <SectionTitle subHeading="Provide" heading="Payment Info"></SectionTitle >
            <Elements stripe={stripePromise}>
                <CheckoutForm item={item}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;