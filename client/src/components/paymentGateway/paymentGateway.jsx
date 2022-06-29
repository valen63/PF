import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Premium } from '../../../redux/actions';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import style from "./paymentGateway.module.css"

const stripePromise = loadStripe('pk_test_51LFUVvA8axHMWg4IbzM18cLI1cIUBXdzdQXFeuYR8wG3mnRTcazOmb4fS7lmWUYn95D7bRe4uAdDDC4DrxH2vDUK004ZMldw6F');
let meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const CheckoutForm = ({ user, type }) => {

    let stripe = useStripe();
    let elements = useElements();

    async function handleSubmit(e) {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card: elements.getElement(CardElement) })
        let date = new Date().toDateString().split(" ");
        let mes = meses.findIndex(e => e === date[1]);
        if (!error) {
            if (type === "AllYear") {
                date = `${meses[0]} ${1 + parseInt(date[2])} ${date[3] + 1}`
                const { id } = paymentMethod
                await Premium({
                    id,
                    amount: 4000, //USD*100
                    plan: "AllOneYear",
                    date,
                    idUser: user._id
                })()
            }
            if (type === "OneMount") {
                if (mes === 11) { date = `${meses[0]} ${1 + parseInt(date[2])} ${date[3]}` }
                else { date = `${meses[mes + 1]} ${1 + parseInt(date[2])} ${date[3]}` }
                const { id } = paymentMethod
                await Premium({
                    id,
                    amount: 1450, //USD*100
                    plan: "AllOneMount",
                    date,
                    idUser: user._id
                })()
            }
            if (type === "OneCourseYear") {
                date = `${meses[0]} ${1 + parseInt(date[2])} ${date[3] + 1}`
                const { id } = paymentMethod
                await Premium({
                    id,
                    amount: 498, //USD*100
                    plan: null,
                    date,
                    idUser: user._id
                })()
            }
            return
        }
        else{console.log(error)}
    }
    return <form onSubmit={(e) => { handleSubmit(e) }}>
        <CardElement className={style.tarjeta} />
        <button>Pagar</button>
    </form>
}

export default function App() {
    const { user } = useSelector((store) => store);
    const { type } = useParams();
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm user={user} type={type} />
        </Elements>
    );
};