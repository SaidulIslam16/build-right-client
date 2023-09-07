import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PaymentMethod_PK);
    return (
        <div>
            <SectionTitle subHeading="Provide" heading="Payment Info"></SectionTitle >
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;