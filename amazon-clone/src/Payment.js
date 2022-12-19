import React, { useEffect, useState } from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import {Link, useNavigate} from "react-router-dom";
import { useStateValue } from './Stateprovider';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from "./axios";
import { async } from '@firebase/util';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

    const [error, setError] = useState();
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState(true); 

    useEffect(() =>{
        const getClientSecret = async() => {
            const response = await axios({
            method: 'post',
            url: `/payment/create?total=${getBasketTotal(basket)*100}`
            })
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket]);

    console.log('the secret is', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card:elements.getElement(CardElement),
            },
        }).then(({ paymentIntent }) => {
            //paymentIntent= payment confirmation 
            setSucceeded(true);
            setError(null);
            setProcessing(true);

            dispatch({
                type: 'EMPITY_BASKET',
            });

            navigate('./orders');

        })
    };
    const handleChange = (event) => {
       setDisabled(event.empty);
       setError(event.error? event.error.message : '')
    }
      return (
    <div className='payment'>
    <div className='payment_container'>
        <h1>
            Checkout {<Link to="/checkout">{basket?.length} items</Link>}
        </h1>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Delivery Adress</h3>
            </div>
            <div className='payment_adress'>
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>RocKville, MD</p>
            </div>
        </div>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Review items and delivery</h3>
            </div>
            <div className='payment_items'>
                {basket.map((item) =>(
                    <CheckoutProduct        
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))} 
            </div>
        </div>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Payment Method</h3>
            </div>
            <div className='payment_details'>
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className='payment_priceContainer'>
                        <CurrencyFormat
                        renderText={(value) => <h3>Order Total: {value}</h3>}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing? <p>Processing</p>: 'Buy Now'}
                            </span>
                        </button>
                    </div>
                    {error && <div>{error}</div>}
                </form>
                
            </div>
        </div>
    </div>
    </div>
)
}

export default Payment