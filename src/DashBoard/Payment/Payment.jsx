import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PaymentMethod_PK);
    const location = useLocation();
    const price = location.state.price;
    console.log(price);
    return (
        <div>
            <SectionTitle subHeading="Provide" heading="Payment Info"></SectionTitle >
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;