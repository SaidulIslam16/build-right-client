import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";

const CheckoutForm = ({ price }) => {

    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, settransactionId] = useState('');

    console.log(price);

    useEffect(() => {
        axios.post('http://localhost:5000/paymentIntent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email,
                        name: user?.displayName,
                    },
                },
            },
        );

        if (confirmationError) {
            console.log('[confirmationError]', confirmationError);
            setCardError(confirmationError.message);
        }
        else {
            console.log('[paymentIntent]', paymentIntent);
        }

        setProcessing(false);


        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            settransactionId(transactionId);
            console.log(transactionId);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-warning mt-4" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>

            <div>{cardError && <p className="text-red-600 mt-4">{cardError}</p>}
                {transactionId && <p className="text-success">Payment Successful and TransactionId: {transactionId}</p>}
            </div>
        </>
    );
};

export default CheckoutForm;