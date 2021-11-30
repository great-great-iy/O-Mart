import React from 'react';
import { Component } from 'react';
import Banner from '../Banner';
import ProductDetail from '../ProductDetail';
import Footer from '../Footer';


class Test extends Component{
    render(){
        return(
            <>
                <Banner banner = 'cm-product-detail-banner'/>
                <ProductDetail/>
                <Footer/>
            </>
        );
    }
}

export default Test;