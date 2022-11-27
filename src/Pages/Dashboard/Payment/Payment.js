import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
    const booking = useLoaderData();
    // console.log('booking data',booking);
    const {treatment, price, appointment, slot} = booking;
    return (
        <div>
            <h3 className='text-5xl'>Payment for {treatment}</h3>
            <p className='text-xl'>Please pay   <strong>${price}</strong>   for your appointment on{appointment} at {slot} </p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                         <CheckOutForm  
                         booking={booking}
                         
                         />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;