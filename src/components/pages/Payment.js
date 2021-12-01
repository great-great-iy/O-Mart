import React, { Component } from 'react';
import Banner from '../Banner';
import Cart from '../Cart';
import './../../css/Cart.css';


class Payment extends Component{
    render(){
        return(
            <>
                <Banner banner = 'cm-payment-banner'/>
                <Cart/>
                
            </>
        );
    }
}

export default Payment;