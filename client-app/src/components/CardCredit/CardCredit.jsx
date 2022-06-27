
import "./styles.css"
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';

export default function CreditCard() {


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
        <div>
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
        </div>
    )
}
