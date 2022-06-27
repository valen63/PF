//npm i react-stripe-checkout e import
// nota el numero de tarjeta para pruebas es 4242424242424242 puros 42 la cantidad de 8 pares de digitos,
const stripeKey = 'pk_test_51LDY5GIVPvJhAX4qtHGolwRm87FZ0m5e8PoMSMvWDmu5MdYT68Xq6VuVnZM1ry4PzdXu66pk5PfFL8j775zGhpqh00j64vGFxg' //esta es la key publica que genere en la plataforma de stripe

import "./styles.css"
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';

export default function PaymentGateway() {


    const [tokenStripe, setTokenStripe] = useState();

    const onToken = (token) => {
        setTokenStripe(token)
    }

    useEffect(() => {
        const makeReq = async () => {
            try {
                const response = await axios.post('http://localhost:3001/api/paysprivate', { tokenId: tokenStripe.id, amount: 500 })
                console.log(response) // ya aca hay q ejecutar otra funcion si en esa data es success para agregar el is Premium

            } catch (err) {
                console.error(err)
            }
        }


    }, [tokenStripe])

    return (
<div class="credit-card-wrap">
	<div class="mk-icon-world-map"></div>
	<div class="credit-card-inner">
		<header class="header">
			<div class="credit-logo">
				<div class="shape"><span class="txt">PB</span></div> <span class="text">Public Bank of Nepal</span>
			</div>
		</header>
		<div class="mk-icon-sim"></div>
		<div class="credit-font credit-card-number" data-text="4716">4716 6109 5211 3010</div>
		<footer class="footer">
			<div class="clearfix">
				<div class="pull-left">
					<div class="credit-card-date"><span class="title">Expires End</span><span class="credit-font">01/018</span></div>
					<div class="credit-font credit-author">MOHAN KHADKA</div>
				</div>
				<div class="pull-right"><div class="mk-icon-visa"></div></div>
			</div>
		</footer>
	</div>
</div>
    )
}


/*
    card {informacion de la card}
            client_ip: 0.0.0.0
            created: 161616161
            email: email@email.com
            id: este es el token!!!!
            livemode: false
            object: "token",
            type: "card"
            used: false
            */

    //despues cuando procesa llega un objeto con mucha instanceOf, alli si me lo regresas para entonces hacer lo del premium, q estoy en eso.. */}

