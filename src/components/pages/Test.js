import React from 'react';
import { Component } from 'react';
import Banner from '../Banner';
import ProductDetail from '../ProductDetail';


class Test extends Component{
    render(){
        return(
            <>
                <Banner banner = 'cm-product-detail-banner'/>
                <ProductDetail/>
                
            </>
        );
    }
}

export default Test;